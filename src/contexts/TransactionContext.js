import PropTypes from 'prop-types'

import { createContext, useContext, useReducer } from 'react'
import transactionReducer from '../reducers/transactionReducer'

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const initialState = {
    transactions: [],
  }

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(transactionReducer, initialState)

  return (
    <TransactionContext.Provider value={{ state }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => useContext(TransactionContext)

TransactionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
