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

type MyParams = {
  issueNumber: string
}

export function Post() {
  const { issueNumber } = useParams<keyof MyParams>() as MyParams
  const FetchIssueById = useContextSelector(GitHubContext, (context) => {
    return context.FetchIssueById
  })
  const issue = useContextSelector(GitHubContext, (context) => {
    return context.issue
  })
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
        <h2>JavaScript data types and data structures</h2>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </footer>
      </HeaderPost>

      <PostContent>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
      </PostContent>
    </PostContainer>
  )
}
