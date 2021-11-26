import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from '../../Routes'

import defaultTheme from '../../assets/styles/themes/default'
import GlobalStyles from '../../assets/styles/global'

import { Wrapper } from './styles'
import Header from '../Header'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Wrapper>
          <Header />
          <Routes />
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
