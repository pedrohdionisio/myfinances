/* eslint-disable no-return-assign */
import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom'

import { ButtonContainer, Wrapper } from './styles'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import useErrors from '../../hooks/useErrors'

import formatValue from '../../utils/formatValue'
import { useTransaction } from '../../contexts/TransactionContext'

export default function TransactionForm({ buttonLabel, updatedUser }) {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors()

  const isFormValid = name && value && type && date && errors.length === 0

  const { handleAddTransaction, handleEditTransaction } = useTransaction()

  const history = useHistory()
  const ref = useRef()

  useEffect(() => {
    if (updatedUser) {
      setName(updatedUser[0].name)
      setValue(updatedUser[0].value)
      setType(updatedUser[0].type)
      setCategory(updatedUser[0].category)
      setDate(updatedUser[0].date)
    }
  }, [updatedUser])

  function handleNameChange({ target }) {
    setName(target.value)

    if (!target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório!' })
    } else {
      removeError('name')
    }
  }

  function handleValueChange({ target }) {
    setValue(formatValue(target.value))

    if (!target.value) {
      setError({ field: 'value', message: 'Valor é obrigatório!' })
    } else {
      removeError('value')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!updatedUser) {
      handleAddTransaction(
        {
          id: uuid(),
          name,
          value,
          type,
          category,
          date,
        },
      )

      history.push('/')
    } else if (updatedUser) {
      handleEditTransaction({
        id: updatedUser[0].id,
        name,
        value,
        type,
        category,
        date,
      })
      history.push('/')
    }
  }

  return (
    <Wrapper onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome*"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('value')}>
        <Input
          placeholder="Valor*"
          value={value}
          onChange={handleValueChange}
          error={getErrorMessageByFieldName('value')}
        />
      </FormGroup>

      <FormGroup>
        <Select onChange={({ target }) => setType(target.value)} value={type}>
          <option value="">Tipo da transação*</option>
          <option value="expense">Despesa</option>
          <option value="revenue">Receita</option>
        </Select>
      </FormGroup>

      {(type === '' || type === 'expense') && (
        <FormGroup error={getErrorMessageByFieldName('category')}>
          <Select onChange={({ target }) => setCategory(target.value)} value={category}>
            <option value="">Categoria*</option>
            <option value="lazer">Lazer</option>
            <option value="alimentação">Alimentação</option>
            <option value="despesas">Despesas</option>
            <option value="investimentos">Investimentos</option>
          </Select>
        </FormGroup>
      )}

      <FormGroup>
        <Input
          type="text"
          ref={ref}
          onFocus={() => (ref.current.type = 'date')}
          placeholder="Data da transação*"
          onChange={({ target }) => setDate(target.value)}
          value={date}
        />
      </FormGroup>

      <ButtonContainer>
        <FormGroup>
          <Button type="submit" disabled={!isFormValid}>
            {buttonLabel}
          </Button>
        </FormGroup>
      </ButtonContainer>
    </Wrapper>
  )
}

TransactionForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  updatedUser: PropTypes.object.isRequired,
}
