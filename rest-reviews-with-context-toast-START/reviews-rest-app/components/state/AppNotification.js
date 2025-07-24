import { useState, createContext,useContext } from 'react';


import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export const AppNotificationContext = createContext({})

export function useNotification() {
  const context = useContext(AppNotificationContext)
  if (!context) {
    throw new Error(`useCount must be used within a AppNotification`)
  }
  return context
}

export function AppNotification(props) {
    const [open, setOpen] = useState(false);
    const [message,setMessage]=useState("Done!");
    const [severity, setSeverity]=useState("info");

    const showNotification=(msg,severity)=>{
        setMessage(msg);
        setSeverity(severity);
        setOpen(true)
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