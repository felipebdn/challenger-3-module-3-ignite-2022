import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContainer, HeaderProfile, FooterProfile } from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface ProfileDataProps {
  avatar_url: string
  html_url: string
  name: string
  bio: string
  company: string
  login: string
  followers: number
}

export function Profile() {
  const [profile, setProfile] = useState<ProfileDataProps>(
    {} as ProfileDataProps,
  )
  // const [isLoading, setIsLoading] = useState(true)
  const FetchProfile = useCallback(async () => {
    try {
      // setIsLoading(true)
      const res = await api.get('users/felipebdn')

      setProfile(res.data)
    } finally {
      // setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    FetchProfile()
  }, [FetchProfile])

  return (
    <ProfileContainer>
      <div>
        <img src={profile.avatar_url} alt="" />
      </div>
      <HeaderProfile>
        <header>
          <h1>{profile.name}</h1>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>{profile.bio}</p>
        <FooterProfile>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profile.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{profile.company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profile.followers}</span>
          </div>
        </FooterProfile>
      </HeaderProfile>
    </ProfileContainer>
  )
}
