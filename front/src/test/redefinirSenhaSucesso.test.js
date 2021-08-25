import React from 'react';

import { fireEvent, render, screen} from '@testing-library/react'

import Header from '../components/Header'
import Login from '../pages/logar/Login';
import RedefinirSenha from '../pages/logar/Redefsenha';
import RecuperarSenha from '../pages/logar/Recupsenha'

const axios = require('axios');

const interval = (time) => {
  return new Promise((res, rej) => {
    setInterval(() => res(), time)
  })
}

describe('Redefinir senha do usuário', () => {
  it('Sucesso ao redefinir', async () => {
    render(<Header/>)
    const button = await screen.getByText('ENTRAR');
    fireEvent.click(button)

    render(<Login />)
    const buttonRedefinirSenha = await screen.getByTestId('redefinirSenha')
    fireEvent.click(buttonRedefinirSenha)

    render(<RecuperarSenha />)
    const emailInput = await screen.getByTestId('redefinirEmail')
    const submitButton = await screen.getByTestId('submitButtonEmail')
    fireEvent.change(emailInput, {target: {value: 'redefinir@test.com'}})
    fireEvent.click(submitButton)
    await interval(1000);

    render(<RedefinirSenha />)
    const novaSenhaInput = await screen.getByTestId('redfSenha')
    const novaSenhaRepetidaInput = await screen.getByTestId('redfSenhaRepetida')
    const novaSenhaButton = await screen.getByTestId('submitButtonSenha')
    fireEvent.change(novaSenhaInput, {target: {value: 'sucesso'}})
    fireEvent.change(novaSenhaRepetidaInput, {target: {value: 'sucesso'}})
    fireEvent.click(novaSenhaButton)
    
    await interval(1000);
  })
})