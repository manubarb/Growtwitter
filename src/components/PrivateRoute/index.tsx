import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export function PrivateRoute() {
  const { signed, isLoading } = useAuth() 
  if (isLoading) return null // adicionar elemento visual de carregamento

    return signed ? <Outlet /> : <Navigate to="/login" />
}
