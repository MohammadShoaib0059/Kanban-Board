import React, { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import SelectorContext from './SelectorContext';
import useFetchData from '../Hooks/useFetchData';
import useSelectorActions from '../Hooks/useSelectorActions';
import { SelectorContextType } from '../Common/Common';

interface SelectorStateProps {
  children: ReactNode;
}

const SelectorState: React.FC<SelectorStateProps> = ({ children }) => {
  const { dataFetched, taskFetched } = useFetchData();
  const { handleOpen, handleClose, handleCardEdit, handledeletebucket, handleDeleteCard } = useSelectorActions();
  const board = useSelector((state: any) => dataFetched ? state.boardData?.data || [] : []);
  const fetchTask = useSelector((state: any) => taskFetched ? state.tasks?.data : []);
  const isAddBucketVisible = useSelector((state: any) => state.board?.isAddBucketVisible);
  const open = useSelector((state: any) => state.board?.open);
  const newBucket = useSelector((state: any) => state.board?.newBucket);
  const taskById = useSelector((state: any) => state.taskById?.task);
  const Id = useSelector((state: any) => state.board?.Id);
  const editid = useSelector((state: any) => state.board?.editId);
  const edit = useSelector((state: any) => state.board?.edit);

  const memoedValue: SelectorContextType = useMemo(() => ({
    handleOpen,
    handleClose,
    handleCardEdit,
    handledeletebucket,
    handleDeleteCard,
    board,
    isAddBucketVisible,
    newBucket,
    fetchTask,
    taskById,
    open,
    Id,
    editid,
    edit,
  }), [
    handleOpen, handleClose, handleCardEdit, handledeletebucket, handleDeleteCard, board,
    isAddBucketVisible, newBucket, fetchTask, taskById, open, Id, editid, edit
  ]);

  return (
    <SelectorContext.Provider value={memoedValue}>
      {children}
    </SelectorContext.Provider>
  );
};

export default SelectorState;
