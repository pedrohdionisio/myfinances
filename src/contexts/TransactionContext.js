import PropTypes from 'prop-types'

import { createContext, useContext } from 'react'

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const initialValue = {
    transactions: [],
  }

  return (
    <TransactionContext.Provider value={{ initialValue }}>
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => useContext(TransactionContext)

TransactionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
