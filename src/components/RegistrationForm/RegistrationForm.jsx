import React, { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";
import useToast from "../../hooks/useToast";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, "Minimum two characters!")
    .max(50, "To Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Minimum eight characters!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match")
    .required("Required!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const { showSuccess, showError } = useToast();

  const fullNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(
        register({
          name: values.fullName,
          email: values.email,
          password: values.password,
        })
      ).unwrap();
      actions.resetForm();
      showSuccess("Registration successful!");
    } catch (error) {
      const message =
        error?.message ||
        "Something went wrong. Please check your data and try again.";
      showError(message);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid, isSubmitting, dirty }) => (
          <Form className={styles.form}>
            <div className={styles.fieldGroup}>
              <label htmlFor={fullNameId} className={styles.label}>
                Name:
              </label>
              <Field
                id={fullNameId}
                name="fullName"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                className={styles.input}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={emailId} className={styles.label}>
                Email:
              </label>
              <Field
                id={emailId}
                name="email"
                type="email"
                placeholder="you@example.com"
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
                placeholder="Create your password"
                autoComplete="new-password"
                className={styles.input}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error}
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={confirmPasswordId} className={styles.label}>
                Confirm password:
              </label>
              <Field
                id={confirmPasswordId}
                name="confirmPassword"
                type="password"
                placeholder="Repeat the password"
                autoComplete="new-password"
                className={styles.input}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={styles.error}
              />
            </div>

            <button
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}
              className={styles.button}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
