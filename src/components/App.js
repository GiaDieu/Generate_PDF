import React, { Fragment } from "react";

import { title } from "./const";

import UserForm from "./UserForm";
import Title from "./shared/Title";
import { Container } from "semantic-ui-react";
import PDFGenerate from "./PDFGenerate";
const App = () => {
  return (
    <Fragment>
      <Container>
        <Title text={title.generateTitle} />
        <UserForm />
        <PDFGenerate />
      </Container>
    </Fragment>
  );
};

export default App;
