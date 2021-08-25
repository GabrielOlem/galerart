import React from 'react';

import { fireEvent, render, screen} from '@testing-library/react'

import Header from '../components/Header'
import Cadastro from '../pages/logar/Cadastro';

const axios = require('axios');

const interval = (time) => {
  return new Promise((res, rej) => {
    setInterval(() => res(), time)
  })
}

describe('Teste api post', () => {
  it('Teste de criar galeria na api', async () => {
        const resp = await axios.get('http://127.0.0.1:8000/users/')

        const elem = resp.data.find((item) => item?.email == 'bubu')
    
        if(elem){
            console.log(elem['id'])
            const resp = await axios.post('http://127.0.0.1:8000/galleries/', {
                nome: 'ArtSoul',
                descricao: 'a melhor de todas',
                local: 'recife/PE',
                usuario: elem['id']
              })
            if(resp['status'] == 201){
              console.log('Galeria adicionada com sucesso')
            }
            else{
              console.log(resp['status'])
              console.log(resp['statusText'])
            }
          }
          else{
            console.log('Não foi possivel concluir a solicitacao')
          }
    await interval(2000)
  })
})