import styled from 'styled-components'

export const Issues = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 3rem 0 0;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  a {
    padding: 2rem;
    background: ${(props) => props.theme['base-post']};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    text-decoration: none;

    border: 2px solid transparent;

    &:hover {
      border: 2px solid #3a536b;
      transition: background-color 0.2s;
    }

    header {
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      h2 {
        flex: 1;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        color: ${(props) => props.theme['base-title']};
      }
      span {
        font-weight: 400;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-span']};
        line-height: 160%;
      }
    }

    p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      overflow: hidden;
      -webkit-box-orient: vertical;

      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-text']};
    }
  }
`
