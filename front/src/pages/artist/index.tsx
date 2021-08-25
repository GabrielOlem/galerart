import React from "react";
import Header from "../../components/Header/index";
import ProfileInfo from "./components/ProfileInfo";
import ProfileArts from "./components/ProfileArts";
import ProfileExpos from "./components/ProfileExpos";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

function Artist() {
  return (
    <Container>
      <Header />
      <div style={{ display: "flex" }}>
        <ProfileInfo />
        <ProfileArts />
        <ProfileExpos />
      </div>
    </Container>
  );
}

export default Artist;
