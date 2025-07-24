import { useRouter } from 'next/router'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

import Link from 'next/link'
import { useAuth } from './state/AuthProvider';
import { useNotification } from './state/AppNotification';

export default function NavBar(props) {
  const router = useRouter()
  /* import isAuthenticated and signOut context here. */ 
  const { isAuthenticated, signOut } = useAuth()
  const {showNotification} = useNotification()

  const handleSignOut = () => {
    signOut()
    showNotification({
      message: "Signed out successfully",
      severity: "success"
    })
  }

  return <AppBar position="static" sx={{marginBottom: "1rem"}}>
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link href="/" >
          App State Example
        </Link>
      </Typography>
      {!isAuthenticated ?
        <Typography variant="h6" component="div" >
          <Link href="/login/">
            Login
          </Link>
        </Typography> 
        :
        <>
          <Typography variant="h6" component="div" sx={{pr: 1}}>
            <Link href="/dashboard/">
              Dashboard
            </Link>
          </Typography> 
          <Typography
            onClick={()=> {handleSignOut()}}
            variant="h6"
            component="div" >
            Sign out
          </Typography> 
        </>
      }  
    </Toolbar>
  </AppBar>
}