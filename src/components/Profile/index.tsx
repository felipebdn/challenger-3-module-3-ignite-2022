import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileContainer, HeaderProfile, FooterProfile } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <img src="./assets/71861370.png" alt="" />
      </div>
      <HeaderProfile>
        <header>
          <h1>Cameron Williamson</h1>
          <a
            href="https://github.com/felipebdn"
            target="_blank"
            rel="noreferrer"
          >
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <FooterProfile>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rockeseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </FooterProfile>
      </HeaderProfile>
    </ProfileContainer>
  )
}
