import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
})
export const getIssueByNumber = axios.create({
  baseURL:
    'https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/',
})
