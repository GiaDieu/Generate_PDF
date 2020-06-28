import React from "react";
import { Input } from "semantic-ui-react";
import styled from "styled-components";

const InputWrapper = styled.div`
  min-width: 80%;
  margin-top: 1em;
  font-size: 1em;
`;
class InputForm extends React.Component {
  render() {
    const { name, value, placeholder, onChange } = this.props;
    return (
      <InputWrapper>
        <Input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          focus
        />
      </InputWrapper>
    );
  }
}

export default InputForm;
