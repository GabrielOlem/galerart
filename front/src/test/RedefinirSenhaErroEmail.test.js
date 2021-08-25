import React from 'react';

import { fireEvent, render, screen} from '@testing-library/react'

import Header from '../components/Header'
import Login from '../pages/logar/Login';
import RecuperarSenha from '../pages/logar/Recupsenha'

const axios = require('axios');

const interval = (time) => {
  return new Promise((res, rej) => {
    setInterval(() => res(), time)
  })
}

describe('Redefinir senha do usuário', () => {
  it('Erro ao redefinir', async () => {
    render(<Header/>)
    const button = await screen.getByText('ENTRAR');
    fireEvent.click(button)

    render(<Login />)
    const buttonRedefinirSenha = await screen.getByTestId('redefinirSenha')
    fireEvent.click(buttonRedefinirSenha)

    render(<RecuperarSenha />)
    const emailInput = await screen.getByTestId('redefinirEmail')
    const submitButton = await screen.getByTestId('submitButtonEmail')
    fireEvent.change(emailInput, {target: {value: 'er@test.com'}})
    fireEvent.click(submitButton)

    await interval(2000);
  })
})