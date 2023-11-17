// DeleteModal.jsx
import React from "react";
import "./deleteModal.css";

const DeleteModal = ({ onDeleteConfirm, onDeleteCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Entry</h2>
        <p>Are you sure you want to delete this entry?</p>
        <button onClick={onDeleteConfirm}>Delete</button>
        <button onClick={onDeleteCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteModal;
