// import { useContext } from 'react'
// import { useContextSelector } from 'use-context-selector'
import { Route, Routes } from 'react-router-dom'
// import { GitHubContext } from './context/GitHubContext'
import { DeafultLayout } from './Layouts/DefaultLayout'
import { Blog } from './Pages/Blog'
import { Post } from './Pages/Post'

export function Router() {
  // const { issue } = useContextSelector(GitHubContext, (context) => {
  //   return context
  // })

  return (
    <Routes>
      <Route element={<DeafultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route
          path="/issue/:issueNumber"
          element={<Post />}
          loader={({ params }) => {
            console.log(params.issueNumber)
          }}
        />
      </Route>
    </Routes>
  )
}
