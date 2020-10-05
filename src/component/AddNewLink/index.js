import React from "react";
import { Container, SubmitLink, Line } from "./styled";
import AddIcon from "@material-ui/icons/Add";

function AddNewLink() {
  return (
    <Container>
      <SubmitLink>
        <AddIcon style={{ fontSize: 60 }} />
        <p>Submıt A Lınk</p>
      </SubmitLink>
      <Line></Line>
    </Container>
  );
}

export default AddNewLink;
