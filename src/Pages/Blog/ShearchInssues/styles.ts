import styled from 'styled-components'

export const ShearchInssuesContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 4rem 0 0;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;

    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};

    color: ${(props) => props.theme['base-text']};

    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    border-radius: 6px;

    &::placeholder {
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-label']};
    }

    &:focus::placeholder {
      color: ${(props) => props.theme['base-text']};
    }
  }
`
