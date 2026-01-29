import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './contexts/AuthContext'
import { AppRoutes } from './routes'
import { theme } from './themes'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
      </ThemeProvider>

    </>
  )
}

export default App
