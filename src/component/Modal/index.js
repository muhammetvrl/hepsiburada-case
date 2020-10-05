import React from "react";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
import { Container, Content } from "./styled";

export default function SimpleModal({ id, open, setOpen, item, deleteLink }) {
  const handleOk = () => {
    deleteLink(id);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Container>
      <div className="header">Remove Link</div>
      <Content>
        <p id="simple-modal-description">
          Do you want to remove: <span>{item}</span>
        </p>
        <Button onClick={() => handleOk()}>Ok</Button>
        <Button onClick={() => handleClose()}>Cancel</Button>
      </Content>
    </Container>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
