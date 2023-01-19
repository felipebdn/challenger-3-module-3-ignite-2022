import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface GitHubContextProviderProps {
  children: ReactNode
}
interface ProfileDataProps {
  avatar_url: string
  html_url: string
  name: string
  bio: string | null
  company: string | null
  login: string
  followers: string
}
interface IssuesDataProps {
  id: string
  title: string
  body: string
  updated_at: string
  number: number
}
interface IssueDataProps {
  id: string
  title: string
  body: string
  updated_at: string
  user: string
  comments: number
}
interface GitHubContextProviderType {
  profile: ProfileDataProps
  issues: IssuesDataProps[]
  issue: IssueDataProps
  FetchIssueById: (id: string) => void
}

export const GitHubContext = createContext({} as GitHubContextProviderType)

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  const [profile, setProfile] = useState({} as ProfileDataProps)
  const [issues, setIssues] = useState([] as IssuesDataProps[])
  const [issue, setIssue] = useState({} as IssueDataProps)

  const FetchProfile = useCallback(async () => {
    const res = await api.get('users/felipebdn')
    setProfile(res.data)
  }, [])

  const FetchRepo = useCallback(async () => {
    const res = await api.get('repos/GBDev13/blog-posts/issues')
    setIssues(res.data)
  }, [])

  const FetchIssueById = useCallback(async (number: string) => {
    const res = await api.get(`repos/GBDev13/blog-posts/issues/${number}`)
    const data: IssueDataProps = {
      id: res.data.id,
      body: res.data.body,
      comments: res.data.comments,
      title: res.data.title,
      updated_at: res.data.updated_at,
      user: res.data.user.login,
    }

    setIssue(data)
  }, [])

  useEffect(() => {
    FetchProfile()
    FetchRepo()
  }, [FetchProfile, FetchRepo])

  return (
    <GitHubContext.Provider value={{ issue, FetchIssueById, profile, issues }}>
      {children}
    </GitHubContext.Provider>
  )
}
