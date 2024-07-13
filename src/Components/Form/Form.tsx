import React from 'react';
import { dayjs, FormControl, Avatar, AdapterDayjs, LocalizationProvider, DatePicker, useContext, TextField, useEffect,Box, Button, Chip, InputLabel, MenuItem, Select, Typography,useTaskForm} from '../../Common/imports';
import './TaskForm.css';
import { SelectorContext } from '../../Context/SelectorContext';
import { SelectorContextType, TaskFormProps } from '../../Common/Common';

const TaskForm: React.FC<TaskFormProps> = ({ handleModalClose }) => {
  const { formik, lookupList, handleClose } = useTaskForm(handleModalClose);
  const context = useContext<SelectorContextType | undefined>(SelectorContext);

  if (!context) {
    throw new Error('Board must be used within a SelectorContext.Provider');
  }

  const { taskById, edit, name, role } = context;
  console.log("taskById", taskById);

  const [existingFiles, setExistingFiles] = React.useState<any[]>([]);

  useEffect(() => {
    if (edit && taskById) {
      formik.setValues({
        title: taskById.title || '',
        priority: taskById.priority || '',
        startDate: taskById.startDate || '',
        dueDate: taskById.dueDate || '',
        progress: taskById.progress || '',
        assignto: taskById.assignto || [],
        description: taskById.description || '',
        attachment: []
      });
      setExistingFiles(taskById.attachment || []);
    }
  }, [edit, taskById]);

  const handleFileRemove = (fileId: string) => {
    setExistingFiles(existingFiles.filter(file => file._id !== fileId));
  };

  return (
    <Box component="form" className="task-form" onSubmit={formik.handleSubmit}>
      <FormControl className="form-group">
        <TextField
          disabled={role === 'user'}
          id="title"
          name="title"
          label="Title"
          variant="outlined"
          fullWidth
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </FormControl>

      <FormControl variant="outlined" className="form-group">
        <InputLabel id="priority-label">Priority</InputLabel>
        <Select
          disabled={role === 'user'}
          labelId="priority-label"
          id="priority"
          name="priority"
          label="Priority"
          value={formik.values.priority}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.priority && Boolean(formik.errors.priority)}
        >
          <MenuItem value="">
            <em>Select priority</em>
          </MenuItem>
          {lookupList.priority?.map((option: string) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.priority && formik.errors.priority && (
          <div className="error">{formik.errors.priority}</div>
        )}
      </FormControl>

      <FormControl className="form-group">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disabled={role === 'user'}
            id="startDate"
            name="startDate"
            label="Start Date"
            inputFormat="MM/DD/YYYY"
            value={formik.values.startDate ? dayjs(formik.values.startDate) : null}
            onChange={(date) => formik.setFieldValue('startDate', date?.format('MM/DD/YYYY'))}
            renderInput={(params: any) => <TextField {...params} variant="outlined" />}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl className="form-group">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disabled={role === 'user'}
            id="dueDate"
            name="dueDate"
            label="Due Date"
            inputFormat="MM/DD/YYYY"
            value={formik.values.dueDate ? dayjs(formik.values.dueDate) : null}
            onChange={(date) => formik.setFieldValue('dueDate', date?.format('MM/DD/YYYY'))}
            renderInput={(params: any) => <TextField {...params} variant="outlined" />}
          />
        </LocalizationProvider>
      </FormControl>

      <FormControl variant="outlined" className="form-group">
        <InputLabel id="progress-label">Progress</InputLabel>
        <Select
          disabled={role === 'user'}
          labelId="progress-label"
          id="progress"
          name="progress"
          label="Progress"
          value={formik.values.progress}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.progress && Boolean(formik.errors.progress)}
        >
          <MenuItem value="">
            <em>Select progress</em>
          </MenuItem>
          {
            !edit
              ? lookupList.progress?.filter((option: string) => option === name).map((option: string) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))
              : lookupList.progress?.map((option: string) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))
          }
        </Select>
        {formik.touched.progress && formik.errors.progress && (
          <div className="error">{formik.errors.progress}</div>
        )}
      </FormControl>

      <FormControl variant="outlined" className="form-group">
        <InputLabel id="assign-label">Assign To</InputLabel>
        <Select
          disabled={role === 'user'}
          labelId="assign-label"
          id="assignto"
          name="assignto"
          label="Assign To"
          multiple
          value={formik.values.assignto}
          onChange={(event) => formik.setFieldValue('assignto', event.target.value as string[])}
          onBlur={formik.handleBlur}
          renderValue={(selected) => (
            <div>
              {selected.map((value: string) => (
                <Chip
                  key={value}
                  avatar={<Avatar>{value[0]}</Avatar>}
                  label={value}
                />
              ))}
            </div>
          )}
          error={formik.touched.assignto && Boolean(formik.errors.assignto)}
        >
          {lookupList.assignto?.map((option: string) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.assignto && formik.errors.assignto && (
          <div className="error">{formik.errors.assignto}</div>
        )}
      </FormControl>

      <FormControl className="form-group full-width">
        <TextField
          disabled={role === 'user'}
          id="description"
          name="description"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
      </FormControl>

      <FormControl className="form-group full-width">
        <input
          disabled={role === 'user'}
          id="attachment"
          name="attachment"
          type="file"
          multiple
          onChange={(event) => {
            formik.setFieldValue('attachment', event.currentTarget.files);
          }}
          onBlur={formik.handleBlur}
          style={{ display: 'none' }}
        />
        <label htmlFor="attachment">
          <Button
            variant="outlined"
            component="span"
            fullWidth
            disabled={role === 'user'}
            style={{ textTransform: 'none' }}
          >
            Attach Files
          </Button>
        </label>
        {formik.touched.attachment && formik.errors.attachment && (
          <div className="error">{formik.errors.attachment}</div>
        )}
        {existingFiles.map((file) => (
          <Box key={file._id} display="flex" alignItems="center">
            <Typography variant="body1" sx={{ color: '#000' }}>
              {file.originalName || file.filename}
            </Typography>
            <Button onClick={() => handleFileRemove(file._id)}>Remove</Button>
          </Box>
        ))}
        {formik.values.attachment && Array.from(formik.values.attachment).map((file: File) => (
          <Typography key={file.name} variant="body1" sx={{ color: '#000' }}>
            {file.name} - {file.size} bytes
          </Typography>
        ))}
      </FormControl>

      <FormControl className="form-group full-width">
        <Button variant="contained" color="primary" type="submit" fullWidth disabled={role === 'user'} sx={{ marginBottom: '10px' }}>
          {edit ? 'Update Task' : 'Create Task'}
        </Button>
        <Button
          variant="contained"
          color="error"
          type="button"
          fullWidth
          onClick={handleClose}
        >
          Cancel
        </Button>
      </FormControl>
    </Box>
  );
};

export default TaskForm;
