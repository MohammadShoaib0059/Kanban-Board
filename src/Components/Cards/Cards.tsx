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
        {role === "user" ? (
          <Button></Button>
        ) : (
          <DeleteIcon onClick={() => handleDeleteCard(id)} />
        )}
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
                    index: any
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
                      | undefined;
                  },
                  index: Key | null | undefined
                ) => (
                  <Chip
                    key={index}
                    label={attachment.originalName}
                    variant="outlined"
                    style={{ width: "120px" }}
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
