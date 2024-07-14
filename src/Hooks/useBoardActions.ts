import { SelectorContextType } from "../Common/Common";
import { SelectorContext } from "../Context/SelectorContext";
import {
  useContext,
  setIsAddBucketVisible,
  setNewBucket,
  useDispatch,
  CreateBucket,
} from "../Common/imports";
import { AppDispatch } from "../Redux/store";
const useBoardActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  const context = useContext<SelectorContextType | undefined>(SelectorContext);
  if (!context) {
    throw new Error("Board must be used within a SelectorContext.Provider");
  }
  const { newBucket, boardId } = context;

  const handleAddBucketClick = () => {
    if (newBucket.trim()) {
      dispatch(CreateBucket({ name: newBucket, boardId }));
      dispatch(setIsAddBucketVisible(false));
      dispatch(setNewBucket(""));
    }
  };

  const handleSaveBucket = () => {
    if (newBucket.trim()) {
      dispatch(setNewBucket(""));
      dispatch(setIsAddBucketVisible(false));
    }
  };
  const handleBucketTextFieldChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setNewBucket(e.target.value));
  };
  const handleBucketVisible = () => {
    dispatch(setIsAddBucketVisible(true));
  };

  return {
    handleAddBucketClick,
    handleSaveBucket,
    handleBucketTextFieldChange,
    handleBucketVisible,
  };
};

export default useBoardActions;
