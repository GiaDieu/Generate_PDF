import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-bottom: 1em;
`;
const ButtonType = ({ text, color, onClick }) => {
  return (
    <ButtonWrapper>
      <Button color={color} onClick={onClick}>
        {text}
      </Button>
    </ButtonWrapper>
  );
};

export default ButtonType;
