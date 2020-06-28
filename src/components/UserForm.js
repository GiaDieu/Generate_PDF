import React from "react";

import { LabelInfo, ButtonText, colors } from "./const";
import { Form } from "semantic-ui-react";
import InputForm from "./shared/InputForm";
import LabelText from "./shared/LabelText";
import ButtonType from "./shared/ButtonType";
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: block;
  width: 100%;
  height: auto;
`;
class UserForm extends React.Component {
  // set up state for some refs
  state = {
    LabelInfo: LabelInfo,
    ButtonText: ButtonText,
    colors: colors,
    user: { username: "", occupation: "", skills: "" },
    // userInfo: [], this one is for technique usage sessionStorage in componentDidMount()

    userInfo: JSON.parse(sessionStorage.getItem("AddUsers")) || [],
    //I prefer this technique, code looks cleaner!
    // this means it is going to check whether there is any data on the storage, if not, use [] array instead
    isSubmit: false,
  };

  // this function will handle many inputs at one time
  onHandleChange = (e) => {
    const { user } = this.state;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  // push all information of 'user' in the state and push to array 'userInfo'
  onHandleSubmit = (e) => {
    e.preventDefault();
    const { user, userInfo } = this.state;
    if (!userInfo || userInfo) {
      const newState = [...userInfo, user];
      sessionStorage.setItem("AddUsers", JSON.stringify(newState)); // the key is set up sessionStorage with key and value
      this.setState({ userInfo: newState, isSubmit: true });
    }
    // this setState is the goal for making empty input again when user submits
    this.setState({
      user: {
        username: "",
        occupation: "",
        skills: "",
      },
    });
  };

  // You can use this technique for storage
  // componentDidMount() {
  //   let users = JSON.parse(sessionStorage.getItem("AddUsers"));
  //   this.setState({
  //     userInfo: users,
  //   });
  // }

  render() {
    const { FullName, Position, Skills } = this.state.LabelInfo;
    const { submit } = this.state.ButtonText;
    const { teal, olive } = this.state.colors;

    const { username, occupation, skills } = this.state.user;

    return (
      !this.state.isSubmit && (
        <WrapperDiv>
          <Form onSubmit={this.onHandleSubmit}>
            <Form.Field>
              <LabelText label={FullName} color={teal} />
              <InputForm
                name="username"
                color={teal}
                value={username}
                onChange={this.onHandleChange}
              />
            </Form.Field>

            <Form.Field>
              <LabelText label={Position} color={teal} />
              <InputForm
                name="occupation"
                color={teal}
                value={occupation}
                onChange={this.onHandleChange}
              />
            </Form.Field>
            <Form.Field>
              <LabelText label={Skills} color={teal} />
              <InputForm
                name="skills"
                color={teal}
                value={skills}
                onChange={this.onHandleChange}
              />
            </Form.Field>
            <Form.Field>
              <ButtonType text={submit} color={olive} />
            </Form.Field>
          </Form>
        </WrapperDiv>
      )
    );
  }
}

export default UserForm;
