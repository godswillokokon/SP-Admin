import React from "react";
import { toast } from "react-toastify";
import Notification from "components/Notification";

function popToast(status, title, { message, closeToast, ...options } = {}) {
  // remove any toast that is in view
  toast.dismiss();

  // display the new toast after a very short time out
  setTimeout(() => {
    toast(
      <Notification
        status={status}
        title={title}
        message={message}
        closeToast={closeToast}
      />,
      options
    );
  }, 500);
}

function toastSuccess(title, { message, closeToast, ...options } = {}) {
  popToast("success", title, { message, closeToast, ...options });
}

function toastError(title, { message, closeToast, ...options } = {}) {
  popToast("error", title, { message, closeToast, ...options });
}
function toastInfo(title, { message, closeToast, ...options } = {}) {
  popToast("info", title, { message, closeToast, ...options });
}
function toastWarning(title, { message, closeToast, ...options } = {}) {
  popToast("warning", title, { message, closeToast, ...options });
}

export { toastSuccess, toastError, toastInfo, toastWarning };
