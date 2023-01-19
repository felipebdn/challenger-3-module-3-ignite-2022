import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 1.5rem;
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -5rem;

  display: flex;
  gap: 2rem;

  div {
    img {
      width: 100%;
      border-radius: 8px;
    }
    width: 13%;
  }
`
export const HeaderProfile = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      color: ${(props) => props.theme['base-title']};
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 130%;
    }

    a {
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 130%;

      text-decoration: none;

      display: flex;
      gap: 0.5rem;

      border-top: 2px solid transparent;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.blue};
        transition: border-color 0.2s;
      }
    }
  }
  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
`
export const FooterProfile = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  margin-top: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
