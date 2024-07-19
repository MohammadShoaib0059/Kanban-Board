import React, { createContext, ReactNode, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectorContextType } from "../Common/Common";
import { useSelectorActions, useFetchData } from "../Common/imports";

export const SelectorContext = createContext<SelectorContextType | undefined>(
  undefined
);

interface SelectorStateProps {
  children: ReactNode;
}

const SelectorState: React.FC<SelectorStateProps> = ({ children }) => {
  // debugger
  const dispatch = useDispatch();
  const status = useSelector((state: any) => state.board?.status);
  const refresh = useSelector((state: any) => state.board?.refresh);
  const isAttachment = useSelector((state: any) => state.board?.isAttachment);
  const update = useSelector((state: any) => state.board?.update);
  const { dataFetched, taskFetched, handleBoardClick } = useFetchData(update);
  const {
    handleNewCard,
    handleNewPlan,
    handleClose,
    handleCardEdit,
    handledeletebucket,
    handleDeleteCard,
    handleBoardDelete,
  } = useSelectorActions();
  const isfetchbucket = useSelector((state: any) => state.board?.isfetchbucket);
  const board = useSelector((state: any) =>
    dataFetched ? state.boardData?.data : []
  );

  const fetchTask = useSelector((state: any) =>
    taskFetched ? state.tasks?.data : []
  );

  const fetchBucket = useSelector((state: any) =>
    isfetchbucket ? state.bucketData?.data : []
  );
  const isAddBucketVisible = useSelector(
    (state: any) => state.board?.isAddBucketVisible
  );
  const isAddNewBucket = useSelector(
    (state: any) => state.board?.isAddNewBucket
  );
  const open = useSelector((state: any) => state.board?.open);
  const newBucket = useSelector((state: any) => state.board?.newBucket);
  const dragData = useSelector((state: any) => state.board?.dragData);

  const taskById = useSelector((state: any) => state.taskById?.task);
  const Id = useSelector((state: any) => state.board?.Id);
  const boardId = useSelector((state: any) => state.board?.boardId);
  const name = useSelector((state: any) => state.board?.Name);

  const deleteTask = useSelector((state: any) => state.board?.deleteTask);
  const editid = useSelector((state: any) => state.board?.editId);
  const edit = useSelector((state: any) => state.board?.edit);
  const isNewBoard = useSelector((state: any) => state.board?.isNewBoard);
  const credentials = localStorage.getItem("credential");
  const isLoggedIn = useSelector((state: any) => state.auth?.isLoggedIn);
  const role = useSelector((state: any) => state.auth?.role);
  const backDropOpen = useSelector((state: any) => state.backdrop.backDropOpen);

  const memoedValue: any = useMemo(
    () => ({
      role,
      update,
      refresh,
      status,
      isAttachment,
      isLoggedIn,
      credentials,
      handleNewCard,
      handleNewPlan,
      backDropOpen,
      handleBoardClick,
      handleClose,
      handleCardEdit,
      handledeletebucket,
      handleDeleteCard,
      handleBoardDelete,
      board,
      dragData,
      isAddBucketVisible,
      isAddNewBucket,
      newBucket,
      deleteTask,
      fetchTask,
      fetchBucket,
      taskById,
      open,
      boardId,
      Id,
      name,
      editid,
      dispatch,
      edit,
      isNewBoard,
    }),
    [
      handleNewCard,
      status,
      update,
      refresh,
      handleNewPlan,
      handleBoardClick,
      handleClose,
      dispatch,
      isAttachment,
      handleCardEdit,
      handledeletebucket,
      handleDeleteCard,
      // board,
      isfetchbucket,
      dataFetched,
      taskFetched,
      boardId,
      isAddBucketVisible,
      handleBoardDelete,
      isAddNewBucket,
      isLoggedIn,
      role,
      backDropOpen,
      credentials,
      newBucket,
      name,
      dragData,
      deleteTask,
      // fetchTask,
      // fetchBucket,
      taskById,
      open,
      Id,
      editid,
      edit,
      isNewBoard,
    ]
  );

  return (
    <SelectorContext.Provider value={memoedValue}>
      {children}
    </SelectorContext.Provider>
  );
};

export default SelectorState;
