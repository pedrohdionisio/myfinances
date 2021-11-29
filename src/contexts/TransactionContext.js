import PropTypes from 'prop-types'

import { createContext, useContext, useReducer } from 'react'
import transactionReducer from '../reducers/transactionReducer'

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const initialState = {
    transactions: [],
    modal: {
      active: false,
      danger: false,
      deletedItemId: null,
      title: 'teste',
      message: 'teste',
    },
  }

  const [state, dispatch] = useReducer(transactionReducer, initialState)

  function handleAddTransaction(transaction) {
    dispatch({ type: 'ADD_ITEM', payload: transaction })
  }

  function handleRemoveTransaction(id) {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  function handleModalActive(modal) {
    dispatch({ type: 'MODAL', payload: modal })
  }

  return (
    <TransactionContext.Provider value={{
      state,
      handleAddTransaction,
      handleModalActive,
      handleRemoveTransaction,
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
