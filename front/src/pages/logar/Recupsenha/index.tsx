import styles from "./styles.module.scss";
import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const axios = require('axios');

function Recupsenha() {
  let [name, setName] = useState();
  let [fullname, setFullName] = useState();
  let [senha, setSenha] = useState();
  let [fullsenha, setFullSenha] = useState();
  let [repsenha, setRepSenha] = useState();
  let [fullrepsenha, setFullRepSenha] = useState();
  const InputEvent = (event: any) => {
    setName(event.target.value);
    // console.log("name", name);
  };
  const InputEventtwo = (event: any) => {
    setSenha(event.target.value);
    // console.log("senha:", senha);
  };
  const InputEventthree = (event: any) => {
    setRepSenha(event.target.value);
    // console.log("senha:", repsenha);
  };

  //quando clica em entrar
  const submit = async (e: any) => {
    e.preventDefault();
    setFullName(name);

    console.log('Dados para envio:', name)

    try{
      const resp = await axios.get('http://127.0.0.1:8000/users/')

      const elem = resp.data.find((item:any) => item?.email == name)

      if(elem){
        console.log('Email cadastrado no sistema, a seguir redefina sua senha')
      }
      else{
        console.log('Email não consta nos registros do sistema, por favor, tente se cadastrar')
      }
    }
  catch(err){
      console.log('Erro ao tentar redefinir senha, serviço indisponível')
  }
};

  return (
    <div className={styles.container}>
      <div className={styles.centro}>
        <div className={styles.title}>
          <h2>Galer</h2>
          <h2>A</h2>
          <h2>r</h2>
          <h2>t</h2>
        </div>
        <div className={styles.box}>
          {" "}
          <form className={styles.form} onSubmit={submit}>
            <div className={styles.alinhar}>
              {" "}
              {/* <Link> */}
              <div>Colocar icone voltar aqui- </div>
              {/* </Link> */}
              <div>Recuperar senha</div>
            </div>
            <div className={styles.text}>
              Informe seu e-mail para alterar a senha
            </div>
            <input data-testid="redefinirEmail" type="text" placeholder="Seu email" onChange={InputEvent} />
            {/* <input
              type="text"
              placeholder="Sua senha"
              onChange={InputEventtwo}
            />
            <input
              type="text"
              placeholder="Repita sua senha"
              onChange={InputEventthree}
            /> */}

            <button data-testid="submitButtonEmail" className={styles.btn}> Entrar</button>
          </form>
          {/* <div className={styles.final}>Não possui uma conta?</div>{" "}
          <div className={styles.fim}>Cadastrar</div>{" "}
          <div className={styles.fim}>Esqueceu a senha?</div> */}
        </div>
      </div>
    </div>
  );
}

export default Recupsenha;
