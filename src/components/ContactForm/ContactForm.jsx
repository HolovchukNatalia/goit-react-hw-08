import React, { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import useToast from "../../hooks/useToast";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .trim()
    .max(50, "Too Long!")
    .trim()
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?\d{7,11}$/, "Number must be 7-11 digits")
    .trim()
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const { showSuccess, showError } = useToast();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    )
      .unwrap()
      .then(() => {
        showSuccess("Contact successfully added!");
        actions.resetForm();
      })
      .catch(() => showError("Error adding contact"));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmit, isValid }) => (
        <Form className={css.form}>
          <div className={css.fieldGroup}>
            <label htmlFor={nameId} className={css.label}>
              Name
            </label>
            <Field type="text" name="name" id={nameId} className={css.input} />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.fieldGroup}>
            <label htmlFor={numberId} className={css.label}>
              Number
            </label>
            <Field
              type="text"
              name="number"
              id={numberId}
              className={css.input}
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>

          <button
            type="submit"
            disabled={isSubmit || !isValid}
            className={css.button}
          >
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
