import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ variant = "danger", children }) => {
  return (
    <div className={`${styles.errorMessage} ${styles[variant]}`}>
      {children}
    </div>
  );
};

export default ErrorMessage;
