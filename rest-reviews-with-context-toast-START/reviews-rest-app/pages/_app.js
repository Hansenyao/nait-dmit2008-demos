import AppNotification from '../components/state/AppNotification.js'
import '../styles/globals.css'

import { ThemeProvider, createTheme } from '@mui/material/styles'

import CssBaseline from '@mui/material/CssBaseline'
import { useTheme } from '../context/themeContext'
import { themeAppContext } from '../context/themeContext'
import { useContext } from 'react'

//const theme = useTheme();

//const theme = useContext(themeAppContext);

const myTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <themeContext>
      <AppNotification >
        <ThemeProvider theme={myTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AppNotification>
    </themeContext>
  )
}

export default MyApp
