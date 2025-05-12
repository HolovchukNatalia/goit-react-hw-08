import React, { useState } from "react";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../Loader/Loader";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import useToast from "../../hooks/useToast";
import EditContactModal from "../EditContactModal/EditContactModal";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectContactId, setSelectContactId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const { showSuccess, showError } = useToast();

  const handleDeleteClick = (id) => {
    setSelectContactId(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(selectContactId))
      .unwrap()
      .then(() => {
        showSuccess("Successfully deleted!");
      })
      .catch(() => {
        showError("Error deleting(");
      });
    setModalOpen(false);
    setSelectContactId(null);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setSelectContactId(null);
  };
  const handleEditClick = (contact) => {
    setSelectedContact(contact);
    setEditModalOpen(true);
  };
  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedContact(null);
  };
  return (
    <>
      {isLoading && !error && <Loader />}
      {!isLoading && error && <b>{error.message}</b>}
      <ul className={css.listContact}>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={() => handleDeleteClick(id)}
            onEdit={() => handleEditClick({ id, name, number })}
          />
        ))}
        {isModalOpen && (
          <ConfirmModal
            onConfirm={handleConfirmDelete}
            onCancel={handleCancel}
          />
        )}
        {isEditModalOpen && (
          <EditContactModal
            contact={selectedContact}
            onClose={handleCloseEditModal}
          />
        )}
      </ul>
    </>
  );
};

export default ContactList;
