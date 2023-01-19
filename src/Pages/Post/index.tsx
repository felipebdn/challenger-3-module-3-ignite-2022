import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { HeaderPost, PostContainer } from './styles'
import { api } from '../../lib/axios'
import { PostContent } from '../../components/Markdown'
import { relativeFormaterData } from '../../utils/DateFormat'

type MyParams = {
  issueNumber: string
}
interface IssueDataProps {
  id: string
  title: string
  url: string
  body: string
  updated_at: string
  user: string
  comments: number
}

export function Post() {
  const { issueNumber } = useParams<keyof MyParams>() as MyParams
  const [issue, setIssue] = useState<IssueDataProps>({} as IssueDataProps)

  const FetchIssueById = useCallback(async (number: string) => {
    try {
      const res = await api.get(
        `repos/felipebdn/challenger-3-module-3-ignite-2022/issues/${number}`,
      )
      const data: IssueDataProps = {
        id: res.data.id,
        url: res.data.html_url,
        body: res.data.body,
        comments: res.data.comments,
        title: res.data.title,
        updated_at: res.data.updated_at,
        user: res.data.user.login,
      }

      setIssue(data)
    } finally {
      // setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    FetchIssueById(issueNumber)
  }, [FetchIssueById, issueNumber])

  const formatedData = relativeFormaterData(issue.updated_at)

  return (
    <PostContainer>
      <HeaderPost>
        <header>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Votar</span>
          </NavLink>
          <a href={issue.url} target="_blank" rel="noreferrer">
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
            <span>{formatedData}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments} comentários</span>
          </div>
        </footer>
      </HeaderPost>
      <PostContent body={issue.body} />
    </PostContainer>
  )
}
