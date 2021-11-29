import PropTypes from 'prop-types'

import { createContext, useContext, useReducer } from 'react'
import transactionReducer from '../reducers/transactionReducer'

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const initialState = {
    transactions: [],
  }

  const [state, dispatch] = useReducer(transactionReducer, initialState)

  function handleAddTransaction(transaction) {
    dispatch({ type: 'ADD_ITEM', payload: transaction })
  }

  return (
    <TransactionContext.Provider value={{
      state,
      handleAddTransaction,
    }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransaction = () => useContext(TransactionContext)

TransactionProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
