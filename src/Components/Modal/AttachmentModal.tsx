
import {
  DialogActions,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import SaveIcon from '@mui/icons-material/Save';
import { handleClose } from '../Cards/Utils';
const AttachmentModal = (attachments:any) => {
 

  return (
    <div>
         <Dialog open={opneModal} onClose={handleClose} maxWidth="xl" fullWidth>
        <DialogTitle className="dialog-title">
          <div>Check List Data:</div>
          <div>
            <Button onClick={handleClose} style={{ color: '#ffffff' }}>
              <CloseIcon />
            </Button>
          </div>
        </DialogTitle>
        <DialogContent>
          
            <>
                
            </>
     
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            style={{ color: 'rgb(48, 167, 205)', textTransform: 'none' }}
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
          <Button
            // onClick={handleSave}
            variant="outlined"
            style={{
              backgroundColor: 'rgb(48, 167, 205)',
              color: 'white',
              textTransform: 'none',
            }}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AttachmentModal
