import React from "react";
import Modal from "./Modal";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  h3 {
    font-size: 22px;
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 20px;
  }
`;

const Stack = styled.div`
  display: flex;
  align-content: flex-end;
  justify-content: flex-end;
`;

const ConfirmDialog = ({
  open,
  onClose,
  title,
  onSubmit,
  description,
  loading,
  okText,
  cancelText,
}) => {
  return (
    <Modal isOpen={open} onClose={onClose} width={500}>
      <Container>
        <h3>{title}</h3>
        <p>{description}</p>
        <Stack>
          <Button black link onClick={onClose}>
            {cancelText}
          </Button>
          <Button onClick={onSubmit} loading={loading}>
            {okText}
          </Button>
        </Stack>
      </Container>
    </Modal>
  );
};

export default ConfirmDialog;
