import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './contexts/AuthContext'
import { AppRoutes } from './routes'
import { theme } from './themes'
// import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <ThemeProvider theme={theme}>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
      </ThemeProvider>

    </>
  )
}

export default App
