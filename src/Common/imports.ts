// React and hooks
export {
  default as React,
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
// Redux hooks and actions
export { useDispatch, useSelector } from "react-redux";
//react-beautiful-dnd
export { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// Redux Slices
export {
  setDeleteTask,
  setEdit,
  setEditId,
  setId,
  setIsAddBucketVisible,
  setOpen,
  setName,
  setNewBoard,
  setUpdate,
  setNewBucket,
  setDragData,
  setStatus,
  setRefresh,
  setAttchment,
  setBoardId,
  setBucketFetched,
  setDeleteBoard,
} from "../Redux/General/ComponentStateSlice";
export { fetchBoard } from "../Redux/Board/boardSlice";
export { fetchTasks } from "../Redux/Task/taskSlice";
export { fetchtaskById } from "../Redux/Task/taskByIdSlice";
export { deletebucket } from "../Redux/Bucket/removebucketSlice";
export { removeTask } from "../Redux/Task/removetaskSlice";
export { CreateBucket } from "../Redux/Bucket/createBucketSlice";
export { fetchBucket } from "../Redux/Bucket/bucketSlice";
export { deleteboard } from "../Redux/Board/removeBoardSlice";
export { fetchLookUp } from "../Redux/General/lookupSlice";
export { CreateTask } from "../Redux/Task/createTaskSlice";
export { UpdateTask } from "../Redux/Task/UpdatetaskSlice";
export { CreateBoard } from "../Redux/Board/createBoardSlice";
export { setCredentials } from "../Redux/General/ComponentStateSlice";
export {
  Loginkanban,
  Logoutkanban,
  setIsLoggedIn,
} from "../Redux/Auth/authSlice";
export { default as AppDispatch, default as RootState } from "../Redux/store";

// Material UI
export { default as Avatar } from "@mui/material/Avatar";
export { Divider } from "@mui/material";
export { default as dayjs } from "dayjs";
export { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
export { DatePicker } from "@mui/x-date-pickers/DatePicker";
export { default as Modal } from "@mui/material/Modal";
export { default as Grid } from "@mui/material/Grid";
export { default as Controls } from "../Components/UI Controls/Controls";
export { Box } from "@mui/material";
export { Fab } from "@mui/material";
export { IconButton } from "@mui/material";
export { Paper } from "@mui/material";
export { Typography } from "@mui/material";
export { TextField } from "@mui/material";
export { Button } from "@mui/material";
export { FormControl } from "@mui/material";
export { useMediaQuery } from "@mui/material";
export { useTheme } from "@mui/material";
export { Chip } from "@mui/material";
export { MenuItem } from "@mui/material";
export { Select } from "@mui/material";
export { default as CalendarTodayIcon } from "@mui/icons-material/CalendarToday";
export { default as EditNoteIcon } from "@mui/icons-material/EditNote";
export { default as AddIcon } from "@mui/icons-material/Add";
export { default as AdminPanelSettingsIcon } from "@mui/icons-material/AdminPanelSettings";
export { default as AccountCircleIcon } from "@mui/icons-material/AccountCircle";
export { default as CloseIcon } from "@mui/icons-material/Close";
export { default as AttachFileIcon } from "@mui/icons-material/AttachFile";
export { default as ChevronLeftIcon } from "@mui/icons-material/ChevronLeft";
export { default as ChevronRightIcon } from "@mui/icons-material/ChevronRight";
export { default as Groups3Icon } from "@mui/icons-material/Groups3";
export { default as DeleteIcon } from "@mui/icons-material/Delete";
export { default as IconButton2 } from "@mui/material/IconButton";

//General
export { useFormik } from "formik";
export { default as axios } from "axios";
export * as Yup from "yup";

//Hooks
export { default as useDragAndDropTask } from "../Hooks/useDragAndDropTask";
export { default as useBoardActions } from "../Hooks/useBoardActions";
export { default as useBoardForm } from "../Hooks/useBoardForm";
export { default as useFetchData } from "../Hooks/useFetchData";
export { default as useSelectorActions } from "../Hooks/useSelectorActions";

//Components
export { default as Loader } from "../Components/Loader";
export { default as Cards } from "../Components/Cards/Cards";
export { useTaskForm } from "../Components/Form/Utils";
export { default as TaskForm } from "../Components/Form/Form";
export { default as BoardForm } from "../Components/Board/BoardForm";
export { default as Board } from "../Components/Board/Board";
export { AuthContext } from "../Context/AuthContext";
export { default as Column } from "../Components/Cards/Column";
export { default as CustomModal } from "../Components/Modal/Modal";
export { default as InputLabel } from "../Components/UI Controls/InputLabel";
export { SidebarHeader } from "../Components/UI Controls/SidebarHeader";
export { SidebarFooter } from "../Components/UI Controls/SidebarFooter";
export { default as AvatarWithBackground } from "../Components/Cards/AvatarGroup";
export { default as Stack } from "../Components/UI Controls/Stack";

//Style
export { styled } from "@mui/material/styles";
export {
  CardContainer,
  TaskTitle,
  CardHeader,
  TaskDetails,
  TaskDueDate,
  TaskAssignees,
} from "../Components/Cards/CardStyles";
export {
  BoardContainer,
  AddBucketContainer,
  TooltipContainer,
  FixedFabContainer,
} from "../Components/Board/Style";
export {
  ColumnContainer,
  Header,
  ColumnHeader,
} from "../Components/Cards/Styles";
