import '@/styles/globals.css'

import AppProviders from '@/components/state/AppProviders'

export default function App({ Component, pageProps }) {
  return <AppProviders>
    <Component {...pageProps} />
  </AppProviders>
}
