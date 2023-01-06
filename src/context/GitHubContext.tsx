import { createContext, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'

interface GitHubContextProviderType {}

interface GitHubContextProviderProps {
  children: ReactNode
}
export const GitHubContext = createContext({} as GitHubContextProviderType)

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  const [profile, setProfile] = useState()

  async function FetchProfile() {
    const data = axios
      .get('/user/felipebdn')
      .then((res) => console.log(res))
      .catch((erro) => console.log(erro))
  }
  useEffect(() => {
    FetchProfile()
  }, [])

  return <GitHubContext.Provider value={{}}>{children}</GitHubContext.Provider>
}
