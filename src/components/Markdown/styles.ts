import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 8rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.blue};
  }

  pre {
    background: ${({ theme }) => theme['base-post']};
    padding: 1rem;

    code {
      font-family: 'Fira Code', monospace;
      font-size: 0.875rem;
    }

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }

  img {
    width: 100%;
  }
`
