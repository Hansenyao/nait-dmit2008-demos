import { useState, createContext } from 'react'

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const AppNotificationContext = createContext({});

export default function AppNotification(props) {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('Done!');
    const [severity, setSeverity] = useState('info');

    const showNotification = ({message, severity}) => {
      setMessage(message);
      setSeverity(severity);
      // display the message
      setOpen(true);
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return <AppNotificationContext.Provider value={{showNotification}}>
      {props.children}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6} variant="filled"  
          onClose={handleClose} severity={severity} sx={{ width: '100%' }}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </AppNotificationContext.Provider>
}