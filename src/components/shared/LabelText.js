import React from "react";
import { Label } from "semantic-ui-react";

const LabelText = ({ label, color }) => {
  return (
    <Label horizontal color={color} size="large">
      {label}
    </Label>
  );
};

export default LabelText;
