import React from "react";
import ReactModal from "react-modal";
import { ReactComponent as CloseIcon } from "assets/img/close-icon-dark.svg";
import styled from "styled-components";
import "./modal.css";

function Modal({
  isOpen,
  onClose,
  children,
  width = 400,
  closeButtonStyle,
  closeButtonSize = 20,
  showCloseButton = true,
  noPadding = false,
  noBorderRadius = false,
}) {
  const CustomContentStyles = {};
  if (width) {
    CustomContentStyles.maxWidth = width + "px";
  }
  if (noPadding) {
    CustomContentStyles.padding = 0;
  }
  if (noBorderRadius) {
    CustomContentStyles.borderRadius = 0;
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal--overlay"
      style={{
        content: CustomContentStyles,
      }}
    >
      {showCloseButton && (
        <CloseButton onClick={onClose} style={closeButtonStyle}>
          <CloseIcon
            width={closeButtonSize}
            height={closeButtonSize}
          />
        </CloseButton>
      )}
      <Body>{children}</Body>
    </ReactModal>
  );
}

const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  box-sizing: border-box;
  right: 20px;
`;

const Body = styled.div`
  padding: 20px 0;
  padding-bottom: 10px;
  box-sizing: border-box;
`;

export default Modal;
