import React from 'react';

import { fireEvent, render, screen} from '@testing-library/react'

import Header from '../components/Header'
import Cadastro from '../pages/logar/Cadastro';

const interval = (time) => {
  return new Promise((res, rej) => {
    setInterval(() => res(), time)
  })
}

describe('Teste de cadastro', () => {
  it('Erro ao cadastrar usuário repetido', async () => {
    render(<Header/>)
    const button = await screen.getByText('CADASTRAR');
    fireEvent.click(button)
    render(<Cadastro />)
    const emailInput = await screen.getByTestId('email')
    const senhaInput = await screen.getByTestId('senha')
    const repetSenhaInput = await screen.getByTestId('repetSenha')
    const submitButton = await screen.getByTestId('submitButton')
    fireEvent.change(emailInput, {target: {value: 'repetido@test.com'}})
    fireEvent.change(senhaInput, {target: {value: 'teste'}})
    fireEvent.change(repetSenhaInput, {target: {value: 'teste'}})
    fireEvent.click(submitButton)

    await interval(2000);
  })
})