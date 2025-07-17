import { Switch } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useTheme } from '../context/themeContext';
import { useState } from 'react';

export default function NavBar({title}) {
  const [theme, setTheme] = useState('light');

    return <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
           {title}
        </Typography>
        <Switch 
          onChange={() => {}} 
          checked={theme==="light" ? "false" : "true"} 
        /> Dark Mode
      </Toolbar>
    </AppBar>
}