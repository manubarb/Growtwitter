import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './contexts/AuthContext'
import { AppRoutes } from './routes'
import { theme } from './themes'
import { TweetProvider } from './contexts/TweetContext'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <AuthProvider>
            <TweetProvider>
              <AppRoutes />
            </TweetProvider>
          </AuthProvider>
      </ThemeProvider>

    </>
  )
}

export default App
