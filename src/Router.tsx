import { Route, Routes } from 'react-router-dom'
import { DeafultLayout } from './Layouts/DefaultLayout'
import { Blog } from './Pages/Blog'
import { Post } from './Pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DeafultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/issue/:issueNumber" element={<Post />} />
      </Route>
    </Routes>
  )
}
