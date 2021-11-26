import { ThemeProvider } from 'styled-components'
import defaultTheme from '../../assets/styles/themes/default'
import GlobalStyles from '../../assets/styles/global'
import { Wrapper } from './styles'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Wrapper>
        <h1>MyFinances</h1>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
