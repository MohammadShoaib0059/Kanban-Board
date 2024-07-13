

export interface Task {
    _id: string;
    title: string;
    description: string;
    priority: string;
    progress: string;
    assignto: string;
    startDate: string;
    dueDate: string;
    // boardId: string;
    bucketId: string;
  }
  
export interface SelectorContextType {
  handleNewCard: (id: any,name:any) => void;
  handleOpen: (id: any,name:any) => void;
  handleNewPlan: (id: any) => void;
  handleBoardClick: (id: any) => void;
  handleClose: () => void;
  handleCardEdit: (id: any) => void;
  handledeletebucket: (id: any) => void;
  handleDeleteCard: (id: any) => void;
  handleBoardDelete: (id: any) => void;
  handleOpenAttachment: () => void;
  board: any[];
  dragData:any,
  isAddBucketVisible: boolean;
  isAddNewBucket:boolean;
  isAttachment:boolean;
  newBucket: string;
  status: string;
  open: boolean;
  dispatch: () => void; 
  edit: boolean;
  update: boolean;
  Id: number;
  boardId:string;
  name:string;
  fetchTask: any[];
  fetchBucket:any[],
  editid: number;
  isNewBoard:boolean;
  taskById: any; 
  credentials:string;
  role:string;
  isLoggedIn:boolean
  backDropOpen:boolean
}

export interface LoginsParams {
  username: string;
  password: string;
}

export interface AuthContextType {
  handleSubmit: (values: LoginsParams) => void;
  handlelogout: () => void;
  isAuthenticated: boolean;
}
  export interface ColumnProps {
    name: string;
    tasks: Array<{
      attachment: any; _id: string; title: string; dueDate: string; assignto: string[] 
}>;
    id: string;
  }
  export interface CardsProps {
    id: string;
    title: string;
    dueDate: string;
    assignees: string[];
    attachments: any;
  }
  export interface CustomModalProps {
    handleModalClose?: () => void;
    // attachment:any;
  }
  export interface TaskFormProps {
    handleModalClose: () => void;
  }
  export interface BoardFormProps {
    handleModalClose: () => void;
  }
  export interface UpdateTaskParams {
    id: number | undefined; 
    boardId: string | undefined;
    bucketId: number | undefined;
    formData: any;
  }
  export interface DragrableTaskParams {
    id: string; 
    bucketId: string;
  }
  export interface BoardState {
    boards: any[];
    status: string;
    error: string | null;
  }
  export interface BucketState {
    buckets: any[];
    status: string;
    error: string | null;
  }
  export interface CreateTaskParams {
    formData: any;
    bucketId: any;
  }
  export interface TaskState {
    task: any;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  export interface LoginsParams {
    username: string;
    password: string;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }