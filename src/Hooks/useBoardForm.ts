import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setIsAddBucketVisible, setUpdate, setOpen ,CreateBoard,useDispatch} from '../Common/imports';
const useBoardForm = (handleModalClose:any) => {
    const dispatch = useDispatch();
  
    const formik = useFormik({
      initialValues: {
        name: '',
      },
      validationSchema: Yup.object({
        name: Yup.string().required('Required'),
      }),
      onSubmit: (values) => {
        // debugger
        const Values = { ...values };
        dispatch(CreateBoard(Values) as any);
        dispatch(setIsAddBucketVisible(false));
        dispatch(setUpdate(true));
        dispatch(setOpen(false));
        handleBucketClose()
        // useFetchData();
      },
    });

    const handleBucketClose = () => {
        formik.resetForm()
        handleModalClose()
    }
  
    return { formik ,handleBucketClose};
  };
  export default useBoardForm;