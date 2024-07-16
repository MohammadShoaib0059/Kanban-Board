import { CardsProps, SelectorContextType } from "../../Common/Common";
import {
  CalendarTodayIcon,
  EditNoteIcon,
  DeleteIcon,
  Divider,
  useContext,
  Chip,
  dayjs,
  Button,
  AvatarWithBackground,
  AttachFileIcon,
  CardContainer,
  TaskTitle,
  CardHeader,
  TaskDetails,
  TaskDueDate,
  TaskAssignees,
} from "../../Common/imports";
import { SelectorContext } from "../../Context/SelectorContext";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const Cards: React.FC<CardsProps> = ({
  id,
  title,
  dueDate,
  assignees,
  attachments,
}) => {
  const context = useContext<SelectorContextType | undefined>(SelectorContext);

  if (!context) {
    throw new Error("Cards must be used within a SelectorContext.Provider");
  }

  const { handleCardEdit, handleDeleteCard, role } = context;
  const formattedDueDate = dayjs(dueDate).format("MM/DD/YYYY");
  return (
    <CardContainer>
      <CardHeader>
        <EditNoteIcon onClick={() => handleCardEdit(id)} />
        <TaskTitle>{title}</TaskTitle>
      {/* <DeleteIcon onClick={() => handleDeleteCard(id)} /> */}
      <Button onClick={() => handleDeleteCard(id)} disabled={role === "user"} sx={{marginRight:"-20px", color:'#000'}}>
    <DeleteIcon />
    </Button>
      </CardHeader>
      <Divider />
      <TaskDetails>
        <TaskDueDate>
          <CalendarTodayIcon
            fontSize="small"
            titleAccess={`Due : ${formattedDueDate}`}
          />
          {/* <span style={{ marginLeft: '4px' }}>{formattedDueDate}</span> */}
          {attachments.length > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AttachFileIcon
                fontSize="small"
                titleAccess={attachments.map(
                  (
                    attachment: {
                      originalName:
                        | string
                        | number
                        | boolean
                        | ReactElement<any, string | JSXElementConstructor<any>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | null
                        | undefined;
                    },
                  ) => (
                    <Chip label={attachment.originalName} />
                  )
                )}
              />
              {attachments.map(
                (
                  attachment: {
                    originalName:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | null
                      | undefined,
                      path:string
                  },
                  index: Key | null | undefined
                ) => (
                  <Chip
                    key={index}
                    label={attachment.originalName}
                    variant="outlined"
                    style={{ width: "120px" }}
                    onClick={() => window.open(attachment.path, '_blank')}
                  />
                )
              )}
            </div>
          )}
        </TaskDueDate>
        <TaskAssignees>
          {assignees.map((assignee, index) => (
            <AvatarWithBackground
              key={index}
              name={assignee}
              title={assignee}
            />
          ))}
        </TaskAssignees>
      </TaskDetails>
    </CardContainer>
  );
};

export default Cards;
