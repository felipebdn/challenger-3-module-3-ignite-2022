import { Router } from './Router'
import { defaultTheme } from './Global/themes/default'
import { GlobalStyle } from './Global/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
