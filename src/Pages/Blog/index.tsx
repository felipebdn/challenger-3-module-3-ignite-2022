import { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Profile } from '../../components/Profile'
import { ShearchInssues } from './ShearchInssues'
import { Issues } from './styles'
import { api } from '../../lib/axios'
import { relativeFormaterData } from '../../utils/DateFormat'

interface IssueDataProps {
  number: number
  body: string
  comments: number
  title: string
  updated_at: string
  user: {
    login: string
  }
}

export function Blog() {
  const [issues, setIssues] = useState<IssueDataProps[]>([] as IssueDataProps[])

  const getIssues = useCallback(async (query: string = '') => {
    const response = await api.get(
      `/search/issues?q=${query}%20label:documentation%20repo:felipebdn/challenger-3-module-3-ignite-2022`,
    )

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    getIssues()
  }, [getIssues])

  return (
    <>
      <Profile />
      <ShearchInssues getIssues={getIssues} amountIssues={issues.length} />
      <Issues>
        {issues.map((issue) => {
          const formatedData = relativeFormaterData(issue.updated_at)
          return (
            <NavLink key={issue.number} to={`/issue/${issue.number}`}>
              <header>
                <h2>{issue.title}</h2>
                <span>{formatedData}</span>
              </header>
              <p>{issue.body}</p>
            </NavLink>
          )
        })}
      </Issues>
    </>
  )
}
