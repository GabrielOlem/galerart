import React from "react";
import Header from "../../components/Header/index";
import Artists from "./components/Artists/index";
import Exhibit from "./components/Exhibit/index";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Home() {
  return (
    <Container>
      <Header />
      <Artists />
      <Exhibit />
    </Container>
  );
}

export default Home;
