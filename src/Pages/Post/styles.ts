import styled from 'styled-components'

export const PostContainer = styled.div``
export const HeaderPost = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  margin-top: -5rem;

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;

    a {
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 130%;

      text-decoration: none;

      display: flex;
      gap: 0.5rem;
      text-transform: uppercase;

      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;
    }

    a:nth-child(2):hover {
      border-bottom: 2px solid ${(props) => props.theme.blue};
      transition: border-color 0.2s;
    }
  }

  h2 {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};

    margin-top: 1.25rem;
  }

  footer {
    display: flex;
    flex-direction: row;

    gap: 2rem;
    margin-top: 0.5rem;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg {
        color: ${(props) => props.theme['base-label']};
      }

      span {
        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
        color: ${(props) => props.theme['base-span']};
      }
    }
  }
`
export const PostContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 8rem;
`
