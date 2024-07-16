import { ColumnProps, SelectorContextType } from "../../Common/Common";
import { SelectorContext } from "../../Context/SelectorContext";
import {
  Stack,
  Grid,
  DeleteIcon,
  AddIcon,
  useContext,
  Button,
  ColumnContainer,
  Header,
  ColumnHeader,
  Cards,
  Draggable,
} from "../../Common/imports";

const Column: React.FC<ColumnProps> = ({ name, tasks, id }) => {
  const context = useContext<SelectorContextType | undefined>(SelectorContext);

  if (!context) {
    throw new Error("Board must be used within a SelectorContext.Provider");
  }

  const { handleNewCard, handledeletebucket, role } = context;

  return (
    <>
      <ColumnContainer>
        <Stack spacing={-2.5}>
          <Header>
            <AddIcon onClick={() => handleNewCard(id, name)} sx={{color:'#000'}}/>
            <ColumnHeader>{name}</ColumnHeader>
            {/* {name === "Up Next" ||
            name === "InProgress" ||
            name === "Completed" ||
            role === "user" ? (
              <Button></Button>
            ) : (
              <DeleteIcon onClick={() => handledeletebucket(id)} />
            )
            } */}
            <Button
              onClick={() => handledeletebucket(id)}
              disabled={
                role === "user" ||
                name === "Up Next" ||
                name === "InProgress" ||
                name === "Completed"
              }
              sx={{ marginRight: "-20px", color: "#000" }}
            >
              <DeleteIcon />
            </Button>
          </Header>
        </Stack>
      </ColumnContainer>
      <Grid container spacing={2} direction="column">
        {tasks.map((task, index) => (
          <Draggable key={task._id} draggableId={task._id} index={index}>
            {(provided) => (
              <Grid
                item
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Cards
                  id={task._id}
                  title={task.title}
                  dueDate={task.dueDate}
                  assignees={task.assignto}
                  attachments={task.attachment}
                />
              </Grid>
            )}
          </Draggable>
        ))}
      </Grid>
    </>
  );
};

export default Column;
