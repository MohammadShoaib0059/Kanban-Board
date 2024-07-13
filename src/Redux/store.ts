import { configureStore } from '@reduxjs/toolkit';
import lookupSlice from './General/lookupSlice';
import componentReducer from './General/ComponentStateSlice';
import createBoardSlice from './Board/createBoardSlice';
import boardSlice from './Board/boardSlice';
// import createTaskSlice from './createTaskSlice';
import taskSlice from './Task/taskSlice';
import removebucketSlice from './Bucket/removebucketSlice';
import taskByIdSlice from './Task/taskByIdSlice';
import UpdatetaskSlice from './Task/UpdatetaskSlice';
// import { removeTask } from './Task/removetaskSlice';
import bucketSlice from './Bucket/bucketSlice';
// import createBucketSlice from './createBucketSlice';
import createTaskSlice from './Task/createTaskSlice';
import createBucketSlice from './Bucket/createBucketSlice';
import authSlice from './Auth/authSlice';
import DragAndDropSlice from './Task/DragAndDropSlice';
import backdropSlice from './Backdrop/backdropSlice';
import removeBoardSlice from './Board/removeBoardSlice';
import removetaskSlice from './Task/removetaskSlice';

const store = configureStore({
  reducer: {
    lookUp: lookupSlice,
    board: componentReducer,
    createBoard:createBoardSlice,
    createBucket:createBucketSlice,
    boardData:boardSlice,
    GetTask:createTaskSlice,
    tasks:taskSlice,
    removebucket:removebucketSlice,
    taskById:taskByIdSlice,
    updateTask:UpdatetaskSlice,
    dragTask:DragAndDropSlice,
    removetask:removetaskSlice,
    bucketData:bucketSlice,
    auth:authSlice,
    backdrop:backdropSlice,
    removeboard:removeBoardSlice
  },
});

// Define RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
