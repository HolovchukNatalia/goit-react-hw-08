import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Book</h1>
      <p className={styles.description}>
        Welcome to the Contact Book application! This app allows you to store,
        search, and manage your contacts with ease. You can add new contacts,
        edit existing ones, and quickly find the person you're looking for by
        name or phone number.
      </p>
      <div className={styles.buttonContainer}>
        <Link to="/login" className={styles.button}>
          Login
        </Link>
        <Link to="/register" className={styles.button}>
          Register
        </Link>
        <Link to="/contacts" className={styles.button}>
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
