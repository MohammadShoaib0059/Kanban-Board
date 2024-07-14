import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext,AuthContext } from '../Common/imports';

const useAuthForm = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuthForm must be used within a AuthContext.Provider');
  }

  const { handleSubmit } = context;

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values as any);
    },
  });

  return formik;
};

export default useAuthForm;
