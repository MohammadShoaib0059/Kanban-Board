import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoardState {
  status:boolean
  credentials:string;
  isAuthenticated:boolean;
  items: string[];
  dragData: boolean;
  isAddBucketVisible: boolean;
  isAddNewBucket: boolean;
  newBucket: string;
  open: boolean;
  Id: string;
  boardId: number;
  Name: string;
  editId: number;
  edit: boolean;
  isAttachment: boolean;
  update: boolean;
  deleteTask: boolean;
  deleteBoard: boolean;
  isNewBoard: boolean;
  isfetchbucket: boolean;
  refresh: boolean;
}

const initialState: BoardState = {
  status:false,
  credentials:"",
  isAuthenticated:false,
  items: ["Item 1", "Item 2", "Item 3"],
  dragData: false,
  isAddBucketVisible: false,
  isAddNewBucket: false,
  newBucket: "",
  open: false,
  Id: "",
  boardId: 0,
  Name: "",
  editId: 0,
  edit: false,
  update: false,
  deleteTask: false,
  isAttachment: false,
  deleteBoard:false,
  isNewBoard: false,
  isfetchbucket: false,
  refresh:false,
};

export const ComponentSlice = createSlice({
  name: "board",
  initialState: initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<string>) {
      state.credentials = action.payload;
    },
    setIsAuthenticated(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setItems(state, action: PayloadAction<string[]>) {
      state.items = action.payload;
    },
    setIsAddBucketVisible(state, action: PayloadAction<boolean>) {
      state.isAddBucketVisible = action.payload;
    },
    setIsNewAddBucket(state, action: PayloadAction<boolean>) {
      state.isAddNewBucket = action.payload;
    },
    setNewBucket(state, action: PayloadAction<string>) {
      state.newBucket = action.payload;
    },
    setUpdate(state, action: PayloadAction<boolean>) {
      state.update = action.payload;
    },
    setDeleteTask(state, action: PayloadAction<boolean>) {
      state.deleteTask = action.payload;
    },
    setDeleteBoard(state, action: PayloadAction<boolean>) {
      state.deleteBoard = action.payload;
    },
    setOpen(state, action: PayloadAction<boolean>) {
      state.open = action.payload;
    },
    setId(state, action: PayloadAction<string>) {
      state.Id = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.Name = action.payload;
    },
    setEditId(state, action: PayloadAction<number>) {
      state.editId = action.payload;
    },
    setEdit(state, action: PayloadAction<boolean>) {
      state.edit = action.payload;
    },
    setBoardId(state, action: PayloadAction<number>) {
      state.boardId = action.payload;
    },
    setNewBoard(state, action: PayloadAction<boolean>) {
      state.isNewBoard = action.payload;
    },
    setAttchment(state, action: PayloadAction<boolean>) {
      state.isAttachment = action.payload;
    },
    setBucketFetched(state, action: PayloadAction<boolean>) {
      state.isfetchbucket = action.payload;
    },
    setDragData(state, action: PayloadAction<boolean>) {
      state.dragData = action.payload;
    },
    setStatus(state, action: PayloadAction<boolean>) {
      state.status = action.payload;
    },
    setRefresh(state, action: PayloadAction<boolean>) {
      state.refresh = action.payload;
    },
  },
});

export const {
  setStatus,
  setRefresh,
  setCredentials,
  setIsAuthenticated,
  setItems,
  setUpdate,
  setEditId,
  setDeleteTask,
  setDeleteBoard,
  setBucketFetched,
  setAttchment,
  setDragData,
  setNewBoard,
  setIsAddBucketVisible,
  setIsNewAddBucket,
  setNewBucket,
  setOpen,
  setBoardId,
  setId,
  setName,
  setEdit,
} = ComponentSlice.actions;

export default ComponentSlice.reducer;
