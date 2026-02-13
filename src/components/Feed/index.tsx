import { Outlet } from 'react-router-dom'

export function Feed() {  
  return (
    <>
    <div className="feed-container">
       <Outlet />
    </div>
    </>
  )
}
