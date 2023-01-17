import { NavLink } from 'react-router-dom'
import { Profile } from '../../components/Profile'
import { GitHubContext } from '../../context/GitHubContext'
import { ShearchInssues } from './ShearchInssues'
import { useContextSelector } from 'use-context-selector'
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
          return (
            <NavLink to={`/issue/${issue.number}`} key={issue.id}>
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
