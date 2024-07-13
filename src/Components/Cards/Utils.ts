import { setAttchment } from "../../Redux/General/ComponentStateSlice"

export const handleOpenAttachment = (dispatch:any)=>{
    dispatch(setAttchment(true))
}
export const handleClose = (dispatch:any)=>{
    dispatch(setAttchment(false))
}