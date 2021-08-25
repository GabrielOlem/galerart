import styles from "./styles.module.scss";
import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const axios = require('axios');

function Redefsenha() {
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
    setFullSenha(senha);
    setFullRepSenha(repsenha);

    const name = 'redefinir@test.com';

    console.log('Dados para envio:', senha,repsenha)
    if(senha === repsenha){
      try{
        const resp1 = await axios.get('http://127.0.0.1:8000/users/')
        const elem = resp1.data.find((item:any) => item?.email == name)

        const resp2 = await axios.patch(`http://127.0.0.1:8000/user/${elem.id}/`, {
          password: senha
        })

        if(resp2.status == 200){
          console.log('Senha Atualizada com sucesso')
        }
        else{
          throw new Error
        }
      }catch(err){
        console.log('Erro ao tentar atualizar senha, serviço indisponível no momento');
      }
    }

    else{
      console.log('As senhas estão diferentes, por favor tente novamente')
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
              <div>Redefinir senha</div>
            </div>

            {/* <input type="text" placeholder="Seu email" onChange={InputEvent} /> */}
            <input
              data-testid="redfSenha"
              type="text"
              placeholder="Nova senha"
              onChange={InputEventtwo}
            />
            <input
              data-testid="redfSenhaRepetida"
              type="text"
              placeholder="Repita a nova senha"
              onChange={InputEventthree}
            />

            <button data-testid="submitButtonSenha" className={styles.btn}> Entrar</button>
          </form>
          {/* <div className={styles.final}>Não possui uma conta?</div>{" "}
          <div className={styles.fim}>Cadastrar</div>{" "}
          <div className={styles.fim}>Esqueceu a senha?</div> */}
        </div>
      </div>
    </div>
  );
}

export default Redefsenha;
