import { Router } from './Router'
import { defaultTheme } from './Global/themes/default'
import { GlobalStyle } from './Global/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GitHubContextProvider } from './context/GitHubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubContextProvider>
          <Router />
        </GitHubContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
