import { RootState, AppDispatch } from "../../Redux/store";
import { SelectorContext } from "../../Context/SelectorContext";
import {
  fetchLookUp,
  CreateTask,
  setUpdate,
  setOpen,
  UpdateTask,
  useSelector,
  useDispatch,
  useEffect,
  useContext,
  useFormik,
  Yup,
} from "../../Common/imports";

export const useTaskForm = (handleModalClose: any) => {
  const context = useContext(SelectorContext);
  const { Id, editid, edit, boardId } = context || {};
  const dispatch: AppDispatch = useDispatch();
  const lookupList: any = useSelector((state: RootState) => state.lookUp.data);
  useEffect(() => {
    dispatch(fetchLookUp());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: "",
      priority: "",
      startDate: "",
      dueDate: "",
      progress: "",
      assignto: [],
      description: "",
      attachment: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      priority: Yup.string().required("Required"),
      startDate: Yup.date().required("Required"),
      dueDate: Yup.date().required("Required"),
      progress: Yup.string(),
      assignto: Yup.array()
        .of(Yup.string().required("Required"))
        .min(1, "Select at least one person")
        .required("Required"),
      description: Yup.string(),
      attachment: Yup.mixed().nullable(),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      if (values.attachment) {
        for (let i = 0; i < values.attachment.length; i++) {
          formData.append("attachment", values.attachment[i]);
        }
      }
      (Object.keys(values) as Array<keyof typeof values>).forEach((key) => {
        if (key !== "attachment") {
          if (Array.isArray(values[key])) {
            (values[key] as any[]).forEach((item, index) => {
              formData.append(`${key}[${index}]`, item);
            });
          } else {
            formData.append(key, values[key]);
          }
        }
      });
      if (edit) {
        dispatch(UpdateTask({ id: editid, boardId, bucketId: Id, formData }));
      } else {
        dispatch(CreateTask({ formData, bucketId: Id }));
      }
      dispatch(setUpdate(true));
      dispatch(setOpen(false));
      handleClose();
    },
  });
  const handleClose = () => {
    formik.resetForm();
    handleModalClose();
  };
  return { formik, lookupList, handleClose };
};
