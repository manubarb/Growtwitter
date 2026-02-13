import { createContext, useState, useEffect, type ReactNode } from 'react'
import { api, authAPI } from '../services/api'

export interface User {
  id: string
  name: string
  username: string
  imageUrl: string
}

interface AuthData {
  signed: boolean
  user: User 
  isLoading: boolean
  signIn: (username: string, password: string) => Promise<boolean>
  isSigningIn: boolean
}

export const AuthContext = createContext<AuthData>({} as AuthData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(true)
  const [isSigningIn, setIsSigningIn] = useState(false)

  useEffect(() => {
    // tenta buscar usuário e token da sessão
    const storedUser = localStorage.getItem('@App:user')
    const storedToken = localStorage.getItem('@App:token')
    // se true, transforma json em objeto e salva no estado
    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser))
        //se houver refresh, cabeçalho é reconfigurado
        api.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`
      } catch {
        localStorage.clear() // caso os dados em localstorage estejam corrompidos
      }
    }

    setIsLoading(false) // finaliza estado de loading
  }, [])

  async function signIn(username: string, password: string) {
    setIsSigningIn(true)

    try {
      const response = await authAPI.login(username, password)
      const { authToken, authUser } = response.data.data
      // usuário persiste após refresh
      localStorage.setItem('@App:token', authToken)
      localStorage.setItem('@App:user', JSON.stringify(authUser))
      setUser(authUser) // estado do usuário logado
      // configura cabeçalho das próximas requisições
      api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`

      return true
    } catch (e) {
      console.log(e)
      return false
    } finally {
    setIsSigningIn(false)
  }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user.id, user, isLoading, signIn, isSigningIn }}>
      {children}
    </AuthContext.Provider>
  )
}
