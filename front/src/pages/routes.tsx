import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./home";
import Login from "./logar/Login";
import Artista from "./artist";
import Cadastro from "./logar/Cadastro";
import Recupsenha from "./logar/Recupsenha";
import Redefsenha from "./logar/Redefsenha";
function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/artista" component={Artista} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/redefinirsenha" component={Redefsenha} />
      <Route path="/recuperarsenha" component={Recupsenha} />
    </BrowserRouter>
  );
}

export default Routes;
