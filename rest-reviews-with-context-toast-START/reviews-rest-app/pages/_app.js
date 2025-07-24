import '../styles/globals.css'
import {AppNotification} from '../components/state/AppNotification'


import {ThemeSwitcherContext} from '../context/themeContext'
import ThemeWraper from '../components/ThemeWraper'

function MyApp({ Component, pageProps }) {
  return (
    <AppNotification>
      <ThemeSwitcherContext>
        <ThemeWraper>
          <Component {...pageProps} />
        </ThemeWraper>
      </ThemeSwitcherContext>
    </AppNotification>
  )
}


export default MyApp
