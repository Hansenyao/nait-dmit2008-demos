import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '../context/themeContext';


export default function ThemeWraper(props) {
   const {appTheme}=useTheme();
   console.log("thememe",appTheme)
   const myTheme = createTheme({
     palette: {
       mode: appTheme,
     },
   });

  return (
    <ThemeProvider theme={myTheme}>
         <CssBaseline />
        {props.children}
    </ThemeProvider>
  )
}
