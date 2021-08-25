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
  it('Sucesso ao cadastrar', async () => {
    render(<Header/>)
    const button = await screen.getByText('CADASTRAR');
    fireEvent.click(button)
    render(<Cadastro />)
    const emailInput = await screen.getByTestId('email')
    const senhaInput = await screen.getByTestId('senha')
    const repetSenhaInput = await screen.getByTestId('repetSenha')
    const submitButton = await screen.getByTestId('submitButton')
    fireEvent.change(emailInput, {target: {value: 'sucesso@test.com'}})
    fireEvent.change(senhaInput, {target: {value: 'test123'}})
    fireEvent.change(repetSenhaInput, {target: {value: 'test123'}})
    fireEvent.click(submitButton)

    await interval(2000);
  })
})