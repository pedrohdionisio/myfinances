/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer, Wrapper } from './styles'

import FormGroup from '../FormGroup'
import Input from '../Input'
import Select from '../Select'
import Button from '../Button'
import useErrors from '../../hooks/useErrors'

import formatValue from '../../utils/formatValue'
// import formatDate from '../../utils/formatDate'

export default function TransactionForm({ buttonLabel }) {
  const [name, setName] = useState('')
  const [value, setValue] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')

  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors()

  const isFormValid = name && value && type && category && date && errors.length === 0

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

  function handleCategoryChange({ target }) {
    setCategory(target.value)

    if (!target.value) {
      setError({ field: 'category', message: 'Categoria é obrigatório!' })
    } else {
      removeError('category')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name, value, type, category, date.replace('-', '/'))
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

      <FormGroup error={getErrorMessageByFieldName('category')}>
        <Input
          type="text"
          placeholder="Categoria*"
          value={category}
          onChange={handleCategoryChange}
          error={getErrorMessageByFieldName('category')}
        />
      </FormGroup>

      <FormGroup>
        <Input
          type="date"
          placeholder="Data*"
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
}
