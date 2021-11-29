const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, transactions: [...state.transactions, action.payload] }
    default:
      return state
  }
}

export default transactionReducer
