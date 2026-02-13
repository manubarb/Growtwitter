import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { PrivateRoute } from '../components/PrivateRoute'
import { PublicRoute } from '../components/PublicRoute'
import { FeedExplore } from '../components/FeedExplore'
import { Profile } from '../components/Profile'
import { TweetList } from '../components/TweetList'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}>
            <Route index element={<TweetList/>}/>
            <Route path="explore" element={<FeedExplore />}/>
            <Route path="profile" element={<Profile />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
