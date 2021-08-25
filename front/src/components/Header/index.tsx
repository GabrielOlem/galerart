import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Galer</h2>
        <h2>A</h2>
        <h2>r</h2>
        <h2>t</h2>
      </div>
      <div className={styles.nav}>
        <div>
          <button>Galerias</button>
        </div>
        <div>
          <button>Exposições</button>
        </div>
        <div>
          <button>Artistas</button>
        </div>
      </div>
      {isLogin ? (
        <div className={styles.login2}>
          <div />
          <p>Nome da pessoa</p>
        </div>
      ) : (
        <div className={styles.login1}>
          {/* <Link to="/cadastro"> */}
            <button name="cadastrar" onClick={() => console.log("Cadastrar")}>
              CADASTRAR
            </button>
          {/* </Link> */}
          {/* <Link to="/login"> */}
            <button name="login" onClick={() => console.log("Login")}>
              ENTRAR
            </button>
          {/* </Link> */}
        </div>
      )}
    </div>
  );
}
