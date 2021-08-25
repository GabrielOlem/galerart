import React from 'react';

import { fireEvent, render, screen} from '@testing-library/react'

import Header from '../components/Header'
import Login from '../pages/logar/Login';

const axios = require('axios');

const interval = (time) => {
  return new Promise((res, rej) => {
    setInterval(() => res(), time)
  })
}

describe('Teste de login', () => {
  it('Sucesso ao logar', async () => {
    render(<Header/>)
    const button = await screen.getByText('ENTRAR');
    fireEvent.click(button)
    render(<Login />)
    const emailInput = await screen.getByTestId('email')
    const senhaInput = await screen.getByTestId('senha')
    const submitButton = await screen.getByTestId('submitButton')
    fireEvent.change(emailInput, {target: {value: 'sucesso@test.com'}})
    fireEvent.change(senhaInput, {target: {value: 'test123'}})
    fireEvent.click(submitButton)

    await interval(2000);
  })
})