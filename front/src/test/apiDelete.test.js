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

describe('Teste api delete', () => {
  it('Teste de remover usuário por email na api', async () => {
        const resp = await axios.get('http://127.0.0.1:8000/users/')

        const elem = resp.data.find((item) => item?.email == 'dasdasda')
    
        if(elem){
          console.log(elem['id'])
          const resp = await axios.delete('http://127.0.0.1:8000/user/'+elem['id']+'/')
          if(resp['status'] = 204){
            console.log('Usuário deletado com sucesso')
          }
          else{
            console.log(resp['status'])
            console.log(resp['statusText'])
          }
        }
        else{
          console.log('Email não existe, por favor verifique seus dados ou se cadastre no site')
        }
    await interval(2000)
  })
})