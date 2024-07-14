
import { DragrableTaskParams } from '../Common/Common';
import { setDragData, setStatus,useDispatch,axios,useState} from '../Common/imports';

const useDragAndDropTask = () => {
  // const [status, setStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const dragAndDropTask = async ({ id, bucketId }: DragrableTaskParams) => {
  
    try {
      dispatch(setStatus(true));
      const response = await axios.patch(
        `http://localhost:3000/task/${id}/bucket`,
        { bucketId },
        {
          // headers: { 'Authorization': `Bearer ${yourAuthToken}` }
        }
      );
      return response.data;
    } catch (error: any) {
      // setStatus('failed');
      setError(error.response.data);
      return error.response.data;
    }
    finally{
      setTimeout(()=>{
        dispatch(setStatus(false));
        dispatch(setDragData(false));
      },1000)
     
    }
  };

  return { dragAndDropTask, error,setStatus };
};

export default useDragAndDropTask;
