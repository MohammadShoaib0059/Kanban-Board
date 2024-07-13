// import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setIsAddBucketVisible, setUpdate, setOpen ,CreateBoard,useFetchData,useDispatch} from '../Common/imports';
// import { CreateBoard } from '../Redux/Board/createBoardSlice';
// import useFetchData from './useFetchData';
// import useFetchData from './useFetchData';
// import { CreateBoard } from "../../Redux/Board/createBoardSlice";
export const useBoardForm = (handleModalClose:any) => {
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
        useFetchData();
      },
    });

    const handleBucketClose = () => {
        formik.resetForm()
        handleModalClose()
    }
  
    return { formik ,handleBucketClose};
  };