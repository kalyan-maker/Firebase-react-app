import React from "react";
import Navbarfunction from "./Navbar/Navbar";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  padding: 4rem 0;
  .container {
    width: 90%;
    margin: 2rem auto;
  }
`;

const LayOut = ({ children }) => {
  return (
    <>
      <Navbarfunction />
      <Main>
        <div className="container"> {children}</div>
      </Main>
    </>
  );
};

export default LayOut;
