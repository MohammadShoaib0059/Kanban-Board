
import { RootState, AppDispatch } from '../Redux/store';
import { SelectorContext } from '../Context/SelectorContext';
import {fetchLookUp,CreateTask,setUpdate,setOpen,UpdateTask,useSelector,useDispatch,useEffect,useContext,useFormik,Yup} from '../Common/imports'
import useFetchData from '../Hooks/useFetchData';

export const useTaskForm = (handleModalClose:any) => {
  // const { Id, setId,editid,edit,boardId } = useContext(SelectorContext);
  // const dispatch: AppDispatch = useDispatch();
  // const lookupList = useSelector((state: RootState) => state.lookUp.data);
  
  const context = useContext(SelectorContext);
  const { Id, editid, edit, boardId } = context || {};
  const dispatch: AppDispatch = useDispatch();
  const lookupList = useSelector((state: RootState) => state.lookUp.data);
  useEffect(() => {
    dispatch(fetchLookUp());
  }, [dispatch]);

 
  const formik = useFormik({
    initialValues: {
      title: '',
      priority: '',
      startDate: '',
      dueDate: '',
      progress: '',
      assignto: [],
      description: '',
      attachment:[]
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      priority: Yup.string().required('Required'),
      startDate: Yup.date().required('Required'),
      dueDate: Yup.date().required('Required'),
      progress: Yup.string(),
      assignto: Yup.array().of(Yup.string().required('Required')).min(1, 'Select at least one person').required('Required'),
      description: Yup.string(),
      attachment: Yup.mixed().nullable(),
    }),
    // onSubmit: (values) => {
    //   debugger
    //   const formData = new FormData();
    //   Object.keys(values).forEach(key => {
    //     if (key === 'attachment' && values.attachment) {
    //       for (let i = 0; i < values.attachment.length; i++) {
    //         formData.append('attachment', values.attachment[i]);
    //       }
    //     } else if (Array.isArray(values[key])) {
    //       values[key].forEach((item, index) => {
    //         formData.append(`${key}[${index}]`, item);
    //       });
    //     } else {
    //       formData.append(key, values[key]);
    //     }
    //   });
    //   const Values = { ...values };
    //   const updatedValues = { ...values };
    //   if (edit) {
    //     dispatch(UpdateTask({id:editid,boardId,bucketId: Id,formData}));
    //   }else{
    //     dispatch(CreateTask({formData,bucketId: Id}));
    //   }
    //   console.log("Created Values :",Values);
    //   console.log("Updated Values :",updatedValues);
    //   dispatch(setUpdate(true))
    //   dispatch(setOpen(false));
    //   // useFetchData()
    //   handleClose()
    //   // const Values = { ...values };
    //   // const updatedValues = { ...values };
    //   // if (edit) {
    //   //   dispatch(UpdateTask({id:editid,boardId,bucketId: Id,UpdatedValues:updatedValues}));
    //   // }else{
    //   //   dispatch(CreateTask({Values,bucketId: Id}));
    //   // }
    //   // console.log("Created Values :",Values);
    //   // console.log("Updated Values :",updatedValues);
    //   // dispatch(setUpdate(true))
    //   // dispatch(setOpen(false));
    //   // useFetchData()
    //   // handleClose()
    // },
    onSubmit: (values) => {
      const formData = new FormData();
    
      // Append attachment data if present
      if (values.attachment) {
        for (let i = 0; i < values.attachment.length; i++) {
          formData.append('attachment', values.attachment[i]);
        }
      }
    
      // Append other form data
      Object.keys(values).forEach(key => {
        if (key !== 'attachment') {
          if (Array.isArray(values[key])) {
            values[key].forEach((item, index) => {
              formData.append(`${key}[${index}]`, item);
            });
          } else {
            formData.append(key, values[key]);
          }
        }
      });
    
      // Dispatch update or create task action
      if (edit) {
        dispatch(UpdateTask({ id: editid, boardId, bucketId: Id, formData }));
      } else {
        dispatch(CreateTask({ formData, bucketId: Id }));
      }
    
      // Reset form and close modal
      dispatch(setUpdate(true));
      dispatch(setOpen(false));
      handleClose();
    },
    
  });
  const handleClose = () => {
    formik.resetForm();
    handleModalClose();
  }
  return { formik, lookupList ,handleClose};
};
