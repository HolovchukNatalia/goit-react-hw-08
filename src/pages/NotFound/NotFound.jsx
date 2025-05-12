import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.text}>
        The page you are looking for does not exist or has been moved.
      </p>
      <button onClick={handleGoHome} className={styles.button}>
        Go to Home Page
      </button>
    </div>
  );
};

export default NotFound;
