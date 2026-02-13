import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function PublicRoute() {
  const { signed, isLoading } = useAuth() 
  if (isLoading) return null // adicionar elemento visual de carregamento

  return signed ? <Navigate to="/" replace /> : <Outlet />
}
