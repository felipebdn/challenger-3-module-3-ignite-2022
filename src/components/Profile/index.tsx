import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContextSelector } from 'use-context-selector'
import { GitHubContext } from '../../context/GitHubContext'
import { ProfileContainer, HeaderProfile, FooterProfile } from './styles'

export function Profile() {
  const profile = useContextSelector(GitHubContext, (context) => {
    return context.profile
  })

  // const { profile } = useContext(GitHubContext)

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
