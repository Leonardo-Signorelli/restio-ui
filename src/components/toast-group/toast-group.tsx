"use client";

import type React from "react";
import { useState } from "react";
import styles from "./toast-group.module.css";
import { ToastGroupProps } from "./toast-group-types";
import Toast from "../../utility-components/toast/toast";

const ToastGroup: React.FC<ToastGroupProps> = ({ toasts, onRemoveToast, maxVisible = 3 }) => {
  const [exitingToasts, setExitingToasts] = useState<Set<string>>(new Set());

  const handleRemoveToast = (id: string) => {
    setExitingToasts((prev) => new Set(prev).add(id));

    // Remove toast after animation
    setTimeout(() => {
      onRemoveToast(id);
      setExitingToasts((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 400); // Aumentato per l'animazione più lunga
  };

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div className={styles.toastGroup}>
      <div className={styles.toastContainer}>
        {toasts.map((toast, index) => (
          <div
            key={toast.id}
            className={`${styles.toastWrapper} ${exitingToasts.has(toast.id) ? styles.exiting : styles.entering}`}
            style={{
              zIndex: Math.max(0, maxVisible - index),
            }}
          >
            <Toast toast={toast} onRemove={handleRemoveToast} isExiting={exitingToasts.has(toast.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToastGroup;
