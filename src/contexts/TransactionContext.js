import PropTypes from 'prop-types'

import {
  createContext, useContext, useEffect, useReducer,
} from 'react'
import transactionReducer from '../reducers/transactionReducer'

const TransactionContext = createContext()

export const TransactionProvider = ({ children }) => {
  const initialState = {
    transactions: [],
    totalExpense: 0,
    totalRevenue: 0,
    balance: 0,
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
    dispatch({ type: 'ACTIVE_MODAL', payload: modal })
  }

  function handleCloseModal() {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  function handleEditTransaction(transaction) {
    dispatch({ type: 'EDIT_ITEM', payload: transaction })
  }

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
    dispatch({ type: 'GET_BALANCE' })
  }, [state.transactions])

  return (
    <TransactionContext.Provider value={{
      state,
      handleAddTransaction,
      handleModalActive,
      handleRemoveTransaction,
      handleCloseModal,
      handleEditTransaction,
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
