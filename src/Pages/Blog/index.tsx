import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Profile } from '../../components/Profile'
import { GitHubContext } from '../../context/GitHubContext'
import { ShearchInssues } from './ShearchInssues'
import { Issues } from './styles'

export function Blog() {
  const issues = useContextSelector(GitHubContext, (context) => {
    return context.issues
  })
  return (
    <>
      <Profile />
      <ShearchInssues />
      <Issues>
        {issues.map((issue) => {
          console.log(issue.id)

          return (
            <NavLink to={`/issue/${issue.id}`} key={issue.id}>
              <header>
                <h2>{issue.title}</h2>
                <span>{issue.updated_at}</span>
              </header>
              <p>{issue.body}</p>
            </NavLink>
          )
        })}
      </Issues>
    </>
  )
}
