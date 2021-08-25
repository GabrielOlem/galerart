import React from "react";
import "./styles/global.module.scss";
import styled from "styled-components";
import Routes from "./pages/routes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
`;

function App() {
  return (
    <Container>
      <Routes />
    </Container>
  );
}

export default App;
