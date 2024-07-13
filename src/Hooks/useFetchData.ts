// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Redux/store';
// import { fetchBoard } from '../Redux/Board/boardSlice';
// import { fetchTasks } from '../Redux/Task/taskSlice';
import { setAttchment, setBoardId, setBucketFetched, setDeleteBoard, setDeleteTask,useState, useEffect,useSelector,useDispatch,fetchBucket,fetchBoard, fetchTasks,setOpen, setRefresh, setUpdate } from '../Common/imports';
// import { fetchBucket } from '../Redux/Bucket/bucketSlice';
import { setBackDropOpen } from '../Redux/Backdrop/backdropSlice';

const useFetchData = (update:any) => {
  // debugger
  const dispatch = useDispatch<AppDispatch>();
  const [dataFetched, setDataFetched] = useState(false);
  const [taskFetched, setTaskFetched] = useState(false);
  // const [bucketetched, setBucketFetched] = useState(false);

  const isAddBucketVisible = useSelector((state: RootState) => state.board?.isAddBucketVisible);
  const boardId = useSelector((state: RootState) => state.board?.boardId);
  const open = useSelector((state: RootState) => state.board?.open);
  const newBucket = useSelector((state: RootState) => state.board?.newBucket);
  const deleteBucket = useSelector((state: RootState) => state.board?.deleteTask);
  const dragData = useSelector((state: any) => state.board?.dragData);
  const isAttachment = useSelector((state: any) => state.board?.isAttachment);
  console.log("dragData",dragData);
  const handleBoardClick = (id:any) =>{
    // console.log("name",name);
    
    // debugger
    // dispatch(fetchBucket(id))
        // const savedBoardId = localStorage.getItem('boardId');
    // if (savedBoardId) {
    //   handleBoardClick(savedBoardId); // Fetch buckets if there's a saved boardId
    // }
    dispatch(fetchBucket(id))
    dispatch(setBucketFetched(true));
    dispatch(setBoardId(id))
    localStorage.setItem('boardId', id);
  }
  useEffect(() => {
    // dispatch(setBackDropOpen(true))
    const savedBoardId = localStorage.getItem('boardId');
    dispatch(fetchBoard()).then(() => setDataFetched(true));
    dispatch(fetchTasks()).then(() => setTaskFetched(true));
    handleBoardClick(savedBoardId);
    dispatch(setDeleteBoard(false));
    dispatch(setUpdate(false))
    dispatch(setDeleteTask(false));
    dispatch(setRefresh(false));
    // dispatch(setAttchment(false));

    // dispatch(setDragData(false))
    // dispatch(setBackDropOpen(false))
    // dispatch(fetchBucket()).then(() => setBucketFetched(true));
  }, [dispatch, isAddBucketVisible,update,dragData, open, isAttachment,deleteBucket, setOpen, newBucket,boardId]);

  return { dataFetched, taskFetched , handleBoardClick
    // ,bucketetched 
  };
};

export default useFetchData;
