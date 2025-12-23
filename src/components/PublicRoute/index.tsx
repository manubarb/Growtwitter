import { Navigate, Outlet } from 'react-router-dom'

export function PublicRoute() {
    const token = localStorage.getItem('@App:token')
    return token ? <Navigate to="/home" replace /> : <Outlet />
}