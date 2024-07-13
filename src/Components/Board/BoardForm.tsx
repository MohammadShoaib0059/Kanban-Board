import {
  Grid,
  React,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  useBoardForm,
  useTheme,
  useMediaQuery,
} from "../../Common/imports";
import { BoardFormProps } from "../../Common/Common";

const BoardForm: React.FC<BoardFormProps> = ({ handleModalClose }) => {
  const { formik, handleBucketClose } = useBoardForm(handleModalClose);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper style={{ padding: "16px", marginTop: "16px" }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {!isMobile && (
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <img
                  src="../src/assets/20945628.jpg"
                  alt="Board"
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
              </Box>
            </Grid>
          )}
          <Grid item xs={12} md={isMobile ? 12 : 6}>
            <Typography variant="h5" gutterBottom sx={{ marginBottom: "30px" }}>
              Create a New Board
            </Typography>
            <TextField
              fullWidth
              name="name"
              label="Board Name"
              variant="standard"
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <FormControl
              className="form-group full-width"
              style={{ display: "flex" }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "16px" }}
                type="submit"
              >
                Create Board
              </Button>
              <Button
                variant="contained"
                color="error"
                fullWidth
                style={{ marginTop: "10px" }}
                type="button"
                onClick={handleBucketClose}
              >
                Cancel
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default BoardForm;
