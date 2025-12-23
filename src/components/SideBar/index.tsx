import { logout } from '../../services/api'

export function SideBar() {
  return (
    <>
      <h1>sidebar</h1>
      <button onClick={logout}>sair</button>
    </>
  )
}
