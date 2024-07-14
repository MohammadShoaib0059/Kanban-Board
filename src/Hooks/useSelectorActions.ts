import { useDispatch } from "react-redux";
import {
  setAttchment,
  setDeleteBoard,
  setDeleteTask,
  setEdit,
  setEditId,
  setId,
  setIsAddBucketVisible,
  setName,
  setNewBoard,
  setNewBucket,
  setOpen,
  fetchtaskById, deletebucket, removeTask,deleteboard
} from "../Common/imports";
import { AppDispatch } from "../Redux/store";
const useSelectorActions = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleNewCard = (id: any, name: any) => {
    dispatch(setAttchment(false));
    dispatch(setNewBoard(false));
    dispatch(setEdit(false));
    handleOpen(id,name)
  };
  const handleOpen = (id: any, name?: any) => {
    dispatch(setNewBoard(false));
    dispatch(setOpen(true));
    dispatch(setId(id));
    dispatch(setName(name));
  };
  const handleNewPlan = () => {
    dispatch(setAttchment(false));
    dispatch(setOpen(true));
    dispatch(setNewBoard(true));
  };

  const handleClose = () => {
    dispatch(setOpen(false));
    dispatch(setDeleteTask(false));
    dispatch(setNewBoard(false));
    dispatch(setOpen(false));
    dispatch(setIsAddBucketVisible(false));
    dispatch(setNewBucket(""));
    // useFetchData();
  };

  const handleCardEdit = (id: number) => {
    dispatch(setAttchment(false));
    dispatch(setEdit(true));
    dispatch(setEditId(id));
    dispatch(fetchtaskById(id));
    handleOpen(id);
  };

  const handledeletebucket = (id: any) => {
    dispatch(deletebucket(id));
    dispatch(setDeleteTask(true));
    // useFetchData();
  };

  const handleDeleteCard = (id: any) => {
    dispatch(removeTask(id));
    dispatch(setDeleteTask(true));
    // useFetchData();
  };
  const handleBoardDelete = (id:any) => {
    dispatch(setDeleteBoard(true));
    dispatch(deleteboard(id));
    // useFetchData()
  };

  return {
    handleOpen,
    handleNewCard,
    handleNewPlan,
    handleClose,
    handleCardEdit,
    handledeletebucket,
    // handleOpenAttachment,
    handleDeleteCard,
    handleBoardDelete
  };
};

export default useSelectorActions;
