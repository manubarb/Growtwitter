import { ThemeProvider } from '@mui/material'
import { AuthProvider } from './contexts/AuthContext'
import { AppRoutes } from './routes'
import { theme } from './themes'
import { TweetProvider } from './contexts/TweetContext'
import { useColorScheme } from '@mui/material/styles'
import { useAppSelector } from './store/hooks' 
import React, { useEffect } from 'react'

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { mode } = useAppSelector((state) => state.themes)
  const { setMode } = useColorScheme()

  useEffect(() => {
    setMode(mode as 'light' | 'dark')
  }, [mode, setMode])

  return <>{children}</>
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ThemeWrapper>
          <AuthProvider>
            <TweetProvider>
              <AppRoutes />
            </TweetProvider>
          </AuthProvider>
        </ThemeWrapper>
      </ThemeProvider>
    </>
  )
}

export default App
