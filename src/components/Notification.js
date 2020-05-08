import React from "react";

import Message from "../styles/Message";
import P from "../styles/P";

import { ReactComponent as CloseIcon } from "../assets/img/close-icon.svg";
import { ReactComponent as SuccessIcon } from "../assets/img/checkmark-green.svg";
import { ReactComponent as ErrorIcon } from "../assets/img/warning.svg";
import { ReactComponent as InfoIcon } from "../assets/img/info.svg";
import { ReactComponent as WarningIcon } from "../assets/img/fair-warning.svg";

const Notification = ({ status, title, message, closeToast }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <SuccessIcon width={15} height={15} />;
      case "error":
        return <ErrorIcon width={15} height={15} />;
      case "info":
        return <InfoIcon width={15} height={15} />;
      case "warning":
        return <WarningIcon width={15} height={15} />;
      default:
        return null;
    }
  };
  return (
    <Message.Container status={status}>
      <Message.Icon>{getStatusIcon(status)}</Message.Icon>
      <Message.Content>
        {title && (
          <P big semiBold>
            {title}
          </P>
        )}
        {message && <P medium>{message}</P>}
      </Message.Content>
      <Message.Close>
        <button onClick={closeToast}>
          <CloseIcon />
        </button>
      </Message.Close>
    </Message.Container>
  );
};

export default Notification;
