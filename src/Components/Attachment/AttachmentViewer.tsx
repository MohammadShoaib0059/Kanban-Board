import React from 'react';
import { Box, Button } from '@mui/material';
import DocViewer, { DocViewerRenderers } from 'react-doc-viewer';

const AttachmentViewer = (attachment:any) => {
  const Uploads = attachment;
console.log("Uploads",attachment);

  const docs = [
    {
      uri: Uploads.path, // Path to the document
      // fileType: Uploads.mimetype, // Optional file type
      // title: Uploads.originalName // Optional title
    }
  ];
  

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}
    >
      <h2 id="attachment-modal-title">{Uploads.originalName}</h2>
      {Uploads && (
        <>
          {/* <DocViewer
          documents={docs}
          pluginRenderers={DocViewerRenderers}
          // options={{ sandbox: { allowScripts: true } }}
            sandbox="allow-scripts"
            // documents={docs}
            // pluginRenderers={DocViewerRenderers}
            // config={{
            //   header: {
            //     disableHeader: true,
            //     disableFileName: true,
            //     // disableFileSize: true,
            //   },
            //   sandbox: "allow-scripts allow-same-origin allow-popups allow-forms" // Add sandbox permissions
            // }}
            // style={{ width: '100%', height: '400px' }}
          /> */}
           <DocViewer documents={docs}   pluginRenderers={DocViewerRenderers}  />
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.open(Uploads.path, '_blank')}
            sx={{ mt: 2 }}
          >
            Download
          </Button>
        </>
      )}
    </Box>
  );
};

export default AttachmentViewer;
