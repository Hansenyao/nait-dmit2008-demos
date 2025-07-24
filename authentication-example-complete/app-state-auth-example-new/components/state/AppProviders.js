import AppNotification from "./AppNotification";
import AuthProvider from "./AuthProvider";

export default function AppProviders({children}) {
  return <AppNotification>
    <AuthProvider>
      {children}
    </AuthProvider>
  </AppNotification>
}