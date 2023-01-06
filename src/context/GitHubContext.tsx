import { createContext, ReactNode, useEffect, useState } from 'react'
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
  id: number
  title: string
  body: string
  updated_at: string
}
interface GitHubContextProviderType {
  profile: ProfileDataProps
  issues: IssuesDataProps[]
}

export const GitHubContext = createContext({} as GitHubContextProviderType)

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  const [profile, setProfile] = useState({} as ProfileDataProps)
  const [issues, setIssues] = useState({} as IssuesDataProps[])

  async function FetchProfile() {
    await api
      .get('users/felipebdn')
      .then((res) => setProfile(res.data))
      .catch((erro) => console.log(erro))
  }
  async function FetchRepo() {
    await api
      .get('repos/rocketseat-education/reactjs-github-blog-challenge/issues')
      .then((res) => setIssues(res.data))
      .catch((error) => console.log(error))
  }
  useEffect(() => {
    FetchProfile()
    FetchRepo()
  }, [])

  return (
    <GitHubContext.Provider value={{ profile, issues }}>
      {children}
    </GitHubContext.Provider>
  )
}
