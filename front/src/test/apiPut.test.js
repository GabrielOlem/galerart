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
    it('Teste de atualizar galeria na api', async () => {
          const resp = await axios.get('http://127.0.0.1:8000/galleries/')
  
          const elem = resp.data.find((item) => item?.nome == 'ArtSoul')
      
          if(elem){
              console.log(elem['id'])
              try{
              const resp = await axios.put('http://127.0.0.1:8000/gallery/'+elem['id']+'/', {
                  nome: 'ArtSoul',
                  descricao: 'a melhor de todas',
                  local: 'olinda/PE',
                  usuario: elem['usuario']
                })
              if(resp['status'] == 200 || resp['status'] == 204){
                console.log('Galeria modificada com sucesso')
              }
              else{
                console.log(resp['status'])
                console.log(resp['statusText'])
              }
            }
            catch(err){
              console.log(err)
            }
          }
        else{
          console.log('Não foi possivel concluir a solicitacao')
        }
      await interval(2000)
    })
  })