import { AuthProvider } from './contexts/AuthContext'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
