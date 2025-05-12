import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import useToast from "../../hooks/useToast";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\+?\d{7,11}$/, "Enter valid number")
    .required("Required"),
});

const EditContactModal = ({ contact, onClose }) => {
  const dispatch = useDispatch();
  const { showSuccess, showError } = useToast();

  const handleSubmit = (values, actions) => {
    dispatch(updateContact({ contactId: contact.id, updatedData: values }))
      .unwrap()
      .then(() => {
        showSuccess("Сontact edited!");
        onClose();
      })
      .catch((error) => {
        showError(`Unable to edit contact: ${error.message || error}`);
      });
    actions.setSubmitting(false);
  };

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Edit Contact</DialogTitle>
      <Formik
        initialValues={{ name: contact.name, number: contact.number }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <DialogContent>
              <div>
                <Field
                  name="name"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Name"
                      variant="outlined"
                      margin="normal"
                      error={!!(<ErrorMessage name="name" />)}
                      helperText={<ErrorMessage name="name" />}
                    />
                  )}
                />
                <Field
                  name="number"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Number"
                      variant="outlined"
                      margin="normal"
                      error={!!(<ErrorMessage name="number" />)}
                      helperText={<ErrorMessage name="number" />}
                    />
                  )}
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                Save Changes
              </Button>
              <Button variant="outlined" color="secondary" onClick={onClose}>
                Close
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default EditContactModal;
