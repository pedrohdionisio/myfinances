import React from 'react'

import PageHeader from '../../components/PageHeader'
import TransactionForm from '../../components/TransactionForm'

export default function EditTransaction() {
  return (
    <div>
      <PageHeader title="Editar Netflix" />
      <TransactionForm buttonLabel="Editar" />
    </div>
  )
}
