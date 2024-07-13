// import { useState } from 'react';
// import axios from 'axios';
import { DragrableTaskParams, UpdateTaskParams } from '../Common/Common';
// import { useDispatch } from 'react-redux';
import { setDragData, setStatus,useDispatch,axios,useState} from '../Common/imports';
// import { setDragData, setStatus } from '../Redux/General/ComponentStateSlice';
// import { setBackDropOpen } from '../Redux/Backdrop/backdropSlice';

const useDragAndDropTask = () => {
  // const [status, setStatus] = useState<'idle' | 'loading' | 'succeeded' | 'failed'>('idle');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const dragAndDropTask = async ({ id, bucketId }: DragrableTaskParams) => {
   
    // dispatch(setBackDropOpen(true)); // Open backdrop when dragging starts
  // debugger
    // dispatch(setDragData(true));
    try {
      dispatch(setStatus(true));
      const response = await axios.patch(
        `http://localhost:3000/task/${id}/bucket`,
        { bucketId },
        {
          // headers: { 'Authorization': `Bearer ${yourAuthToken}` }
        }
      );
   
    //   dispatch(setBackDropOpen(false)); // Close backdrop when dragging ends
    
    // dispatch(setStatus('succeeded'));
    // dispatch(setDragData(false));
      return response.data;
    } catch (error: any) {
      // setStatus('failed');
      setError(error.response.data);
    //   dispatch(setBackDropOpen(false)); // Close backdrop if there is an error
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
