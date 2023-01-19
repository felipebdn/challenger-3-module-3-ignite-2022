import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { GitHubContext } from '../../context/GitHubContext'
import { HeaderPost, PostContainer, PostContent } from './styles'
import { useContextSelector } from 'use-context-selector'
import ReactMarkdown from 'react-markdown'

type MyParams = {
  issueNumber: string
}

export function Post() {
  const { issueNumber } = useParams<keyof MyParams>() as MyParams

  const { FetchIssueById, issue } = useContextSelector(
    GitHubContext,
    (context) => {
      return context
    },
  )
  useEffect(() => {
    FetchIssueById(issueNumber)
  }, [FetchIssueById, issueNumber])

  return (
    <PostContainer>
      <HeaderPost>
        <header>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Votar</span>
          </NavLink>
          <a href="#">
            <span>Ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <h2>{issue.title}</h2>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.user}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments} comentários</span>
          </div>
        </footer>
      </HeaderPost>

      <PostContent>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
