import { SelectorContextType } from "../../Common/Common";
import { SelectorContext } from "../../Context/SelectorContext";
import {
  React,
  Grid,
  useContext,
  TextField,
  Column,
  CustomModal,
  useState,
  useEffect,
  AddIcon,
  Box,
  Fab,
  DragDropContext,
  Droppable,
  setDragData,
  IconButton2,
  CloseIcon,
  useDragAndDropTask,
  useDispatch,
  Button,
  Loader,
  useBoardActions,
  BoardContainer,
  AddBucketContainer,
  TooltipContainer,
  FixedFabContainer,
} from "../../Common/imports";

const Board: React.FC = () => {
  const context = useContext<SelectorContextType | undefined>(SelectorContext);

  if (!context) {
    throw new Error("Board must be used within a SelectorContext.Provider");
  }

  const {
    fetchBucket,
    isAddBucketVisible,
    newBucket,
    role,
    status,
    handleClose,
  } = context;
  const {
    handleAddBucketClick,
    handleBucketTextFieldChange,
    handleBucketVisible,
  } = useBoardActions();
  const dispatch = useDispatch();
  const { dragAndDropTask } = useDragAndDropTask();
  // console.log('status',status);
  const [loading, setLoading] = useState(false);
  // const onDragStart = () => {
  //   //  dispatch(setDragData(true));
  // };
  useEffect(() => {
    if (status) {
      setLoading(true);
      dispatch(setDragData(true));
      setLoading(false);
      // return 'Loading....'
    }
    // dispatch(setRefresh(true))
  }, [loading, dispatch, status]);

  // if(status) {
  //   return (
  //     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
  //       <Typography color="error"><CircularProgress size={70} /></Typography>
  //     </Box>
  //   );
  // }
  const onDragEnd = (result: any) => {
    console.log("result", result);
    const { destination, source, draggableId } = result;
    if (!destination) return;
    // context.dispatch(setDragData(true));
    // dispatch(setStatus('idle'));
    // dispatch(setDragData(true));
    dragAndDropTask({
      id: draggableId,
      bucketId: destination.droppableId,
    });
  };
  // useFetchData(status)

  return (
    <BoardContainer>
      {status && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "95%",
            backgroundColor: "rgba(0, 0, 0, 1)",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </Box>
      )}
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
          {fetchBucket.map((bucket) => (
            <Grid item key={bucket._id} sx={{ minWidth: "400px" }}>
              <Droppable droppableId={bucket._id}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <Column
                      id={bucket._id}
                      name={bucket.name}
                      tasks={bucket.tasks}
                    />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Grid>
          ))}
          <Grid item>
            <AddBucketContainer>
              {isAddBucketVisible && (
                <TooltipContainer>
                  <TextField
                    label="New Bucket"
                    variant="outlined"
                    value={newBucket}
                    onChange={handleBucketTextFieldChange}
                    sx={{
                      backgroundColor: "white",
                      marginRight: "10px",
                      "& .MuiInputBase-root": {
                        height: "40px",
                        padding: "5px 10px",
                      },
                      "& .MuiInputLabel-root": {
                        top: "-5px",
                      },
                      "& .MuiInputLabel-shrink": {
                        top: "0px",
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddBucketClick}
                    sx={{
                      height: "40px",
                      backgroundColor: "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#f0f0f0",
                      },
                    }}
                  >
                    Save
                  </Button>
                  <IconButton2
                    sx={{ marginLeft: "10px", padding: "5px" }}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </IconButton2>
                </TooltipContainer>
              )}
            </AddBucketContainer>
          </Grid>
        </Grid>
      </DragDropContext>
      <CustomModal />
      <FixedFabContainer>
        <Fab
          disabled={role === "user"}
          color="primary"
          aria-label="add"
          onClick={handleBucketVisible}
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <AddIcon />
        </Fab>
      </FixedFabContainer>
    </BoardContainer>
  );
};

export default Board;
