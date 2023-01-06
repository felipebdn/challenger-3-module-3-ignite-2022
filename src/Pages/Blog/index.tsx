import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Profile } from '../../components/Profile'
import { GitHubContext } from '../../context/GitHubContext'
import { ShearchInssues } from './ShearchInssues'
import { Inssues } from './styles'

export function Blog() {
  const { issues } = useContext(GitHubContext)

  return (
    <>
      <Profile />
      <ShearchInssues />
      <Inssues>
        {issues.map((issue) => {
          return (
            <NavLink to="/inssue" key={issue.id}>
              <header>
                <h2>{issue.title}</h2>
                <span>{issue.updated_at}</span>
              </header>
              <p>{issue.body}</p>
            </NavLink>
          )
        })}
      </Inssues>
    </>
  )
}
