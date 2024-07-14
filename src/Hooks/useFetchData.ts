
import { AppDispatch, RootState } from '../Redux/store';
import { setBoardId, setBucketFetched, setDeleteBoard, setDeleteTask,useState, useEffect,useSelector,useDispatch,fetchBucket,fetchBoard, fetchTasks,setOpen, setRefresh, setUpdate } from '../Common/imports';

const useFetchData = (update:any) => {
  const dispatch = useDispatch<AppDispatch>();
  const [dataFetched, setDataFetched] = useState(false);
  const [taskFetched, setTaskFetched] = useState(false);

  const isAddBucketVisible = useSelector((state: RootState) => state.board?.isAddBucketVisible);
  const boardId = useSelector((state: RootState) => state.board?.boardId);
  const open = useSelector((state: RootState) => state.board?.open);
  const newBucket = useSelector((state: RootState) => state.board?.newBucket);
  const deleteBucket = useSelector((state: RootState) => state.board?.deleteTask);
  const dragData = useSelector((state: any) => state.board?.dragData);
  const isAttachment = useSelector((state: any) => state.board?.isAttachment);
  console.log("dragData",dragData);
  const handleBoardClick = (id:any) =>{
    dispatch(fetchBucket(id))
    dispatch(setBucketFetched(true));
    dispatch(setBoardId(id))
    localStorage.setItem('boardId', id);
  }
  useEffect(() => {
    const savedBoardId = localStorage.getItem('boardId');
    dispatch(fetchBoard()).then(() => setDataFetched(true));
    dispatch(fetchTasks()).then(() => setTaskFetched(true));
    handleBoardClick(savedBoardId);
    dispatch(setDeleteBoard(false));
    dispatch(setUpdate(false))
    dispatch(setDeleteTask(false));
    dispatch(setRefresh(false));
  }, [dispatch, isAddBucketVisible,update,dragData, open, isAttachment,deleteBucket, setOpen, newBucket,boardId]);

  return { dataFetched, taskFetched , handleBoardClick
  };
};

export default useFetchData;
