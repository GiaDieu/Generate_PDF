import React from "react";
import Axios from "axios";
import { saveAs } from "file-saver";
import { ButtonText, colors, LabelInfo, type, title } from "./const";
import ButtonType from "./shared/ButtonType";
import InputForm from "./shared/InputForm";
import LabelText from "./shared/LabelText";
import { Form } from "semantic-ui-react";
import Title from "./shared/Title";

class PDFGenerate extends React.Component {
  state = { name: "", receivedId: 0, firstprice: 0, secondprice: 0 };

  onHandleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createDownloadPDF = () => {
    Axios.post("/create-pdf", this.state)
      .then(() => Axios.get("/fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        const pdfBob = new Blob([res.data], { type: "Application/pdf" });

        saveAs(pdfBob, "newPDf.pdf");
      });
  };

  render() {
    return (
      <Form>
        <Title text={title.formTitle} />
        <Form.Field>
          <LabelText label={LabelInfo.CVName} />
          <InputForm
            type={type.text}
            name="name"
            value={this.state.name}
            placeholder={"please enter your Name to your CV"}
            onChange={this.onHandleChange}
          />
        </Form.Field>
        <Form.Field>
          <LabelText label="receivedId" />
          <InputForm
            type={type.number}
            name="receivedId"
            value={this.state.receivedId}
            onChange={this.onHandleChange}
          />
        </Form.Field>
        <Form.Field>
          <LabelText label="firstPrice" />
          <InputForm
            type={type.number}
            name="firstprice"
            value={this.state.firstPrice}
            onChange={this.onHandleChange}
          />
        </Form.Field>
        <Form.Field>
          <LabelText label="secondPrice" />
          <InputForm
            type={type.number}
            name="secondprice"
            value={this.state.SecondPrice}
            onChange={this.onHandleChange}
          />
        </Form.Field>
        <Form.Field>
          <ButtonType
            text={ButtonText.generate}
            color={colors.orange}
            onClick={this.createDownloadPDF}
          />
        </Form.Field>
      </Form>
    );
  }
}

export default PDFGenerate;
