import React from 'react'
import { useParams } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import TransactionForm from '../../components/TransactionForm'
import { useTransaction } from '../../contexts/TransactionContext'

export default function EditTransaction() {
  const params = useParams()
  const { state } = useTransaction()

  const updatedUser = state.transactions.filter((item) => item.id === params.id)

  return (
    <div>
      <PageHeader title="Editar Netflix" />
      <TransactionForm buttonLabel="Editar" updatedUser={updatedUser} />
    </div>
  )
}
