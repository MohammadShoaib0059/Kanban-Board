import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RootState } from '../../Redux/store';
import { removeNotification } from '../../Redux/notifications/notificationSlice';


const Notification: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications);
  const dispatch = useDispatch();

  useEffect(() => {
    notifications.forEach(notification => {
      const toastOptions: ToastOptions = {
        className: 'custom-toast',
        onClose: () => dispatch(removeNotification(notification.id)),
        autoClose: 3000, // Optional: adjust auto close time
      };
      toast[notification.type](notification.message, toastOptions);
    });
  }, [notifications, dispatch]);

  return (
    <ToastContainer
      className="custom-toast-container"
      position="bottom-right" // Adjust position (top-right, top-center, top-left, bottom-right, bottom-center, bottom-left)
      autoClose={5000} // Auto close time
      hideProgressBar={false} // Show/hide progress bar
      newestOnTop={false} // Newest toast on top
      closeOnClick // Close toast on click
      rtl={false} // Right to left text direction
      pauseOnFocusLoss // Pause on focus loss
      draggable // Draggable
      pauseOnHover // Pause on hover
    />
  );
};

export default Notification;

