import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
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
    const res = await api.get('users/felipebdn', {
      params: {
        _sort: 'createdAt',
      },
    })
    setProfile(res.data)
  }, [])

  const FetchRepo = useCallback(async () => {
    const res = await api.get(
      'repos/rocketseat-education/reactjs-github-blog-challenge/issues',
      {
        params: {
          _sort: 'createdAt',
        },
      },
    )
    setIssues(res.data)
  }, [])

  async function FetchIssueById(id: string) {
    const res = await api.get(, {
      params: {
        _sort: 'createdAt',
      },
    })
    setIssue(res.data)
  }

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
