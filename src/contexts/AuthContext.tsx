import { createContext, useState, useEffect, type ReactNode } from 'react'
import { api, authAPI } from '../services/api'

interface User {
  id: number
  name: string
  username: string
}

interface AuthData {
  signed: boolean
  user: User | null
  isLoading: boolean
  signIn: (username: string, password: string) => Promise<boolean>
}

export const AuthContext = createContext<AuthData>({} as AuthData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // tenta buscar o usuário salvo no localstorage
    const storedUser = localStorage.getItem('@App:user')
    // se true, transforma json em objeto e salva no estado
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        localStorage.removeItem('@App:user') // se false, limpa tudo
        localStorage.removeItem('@App:token')
      }
    }

    setIsLoading(false) // finaliza estado de loading
  }, [])

  async function signIn(username: string, password: string) {
    try {
      const response = await authAPI.login(username, password)
      const { authToken, authUser } = response.data.data
      // usuário persiste após refresh
      localStorage.setItem('@App:token', authToken)
      localStorage.setItem('@App:user', JSON.stringify(authUser))
      setUser(authUser) // estado do usuário logado
      // configura cabeçalho "Authorization" de todas as próximas requisições
      api.defaults.headers.common['Authorization'] = `Bearer ${authToken}`

      return true
    } catch (e) {
      console.log(e)
      return false
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, isLoading, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
