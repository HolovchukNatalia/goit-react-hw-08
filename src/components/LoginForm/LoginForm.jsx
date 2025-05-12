import React, { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required!"),
  password: Yup.string()
    .min(8, "Minimum eight characters!")
    .required("Required!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      ).unwrap();
      actions.resetForm();
    } catch (error) {
      const serverErrors = {};
      if (error.email) {
        serverErrors.email = error.email.message;
      }
      if (error.password) {
        serverErrors.password = error.password.message;
      }
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, isSubmitting, dirty }) => (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <label htmlFor={emailId} className={styles.label}>
                Email:
              </label>
              <Field
                id={emailId}
                name="email"
                type="email"
                placeholder="Enter email"
                autoComplete="email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={passwordId} className={styles.label}>
                Password:
              </label>
              <Field
                id={passwordId}
                name="password"
                type="password"
                placeholder="Enter password"
                autoComplete="current-password"
                className={styles.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>

            <button
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              className={styles.button}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
