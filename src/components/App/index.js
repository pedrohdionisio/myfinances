import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Routes from '../../Routes'

import defaultTheme from '../../assets/styles/themes/default'
import GlobalStyles from '../../assets/styles/global'
import { Wrapper } from './styles'

import { TransactionProvider } from '../../contexts/TransactionContext'

import Header from '../Header'

function App() {
  return (
    <TransactionProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Wrapper>
            <Header />
            <Routes />
          </Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    </TransactionProvider>
  )
}

export default App
