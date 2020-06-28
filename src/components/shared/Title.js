import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 1em 2em;
`;
const Title = ({ text }) => {
  return (
    <HeaderWrapper>
      <Header as="h1" textAlign="center">
        {text}
      </Header>
    </HeaderWrapper>
  );
};

export default Title;
