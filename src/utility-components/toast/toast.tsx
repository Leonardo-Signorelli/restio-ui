"use client";

import type React from "react";
import styles from "./toast.module.css";
import { ToastProps } from "./toast-types";
import { Button } from "../../components/button/button";

const Toast: React.FC<ToastProps> = ({ toast, onRemove }) => {
  const handleClose = () => {
    toast.onClose?.();
    onRemove(toast.id);
  };

  const toastClass = {
    toastWrapper: styles["rst-toast"],
    toastMessage: styles["rst-toast-message"],
  };

  return (
    <div className={toastClass.toastWrapper} onClick={handleClose}>
      <div className={toastClass.toastMessage}>{toast.message}</div>
      <Button leadingVisual="close" value={""} onClick={handleClose} aria-label="Chiudi notifica" />
    </div>
  );
};

export default Toast;
