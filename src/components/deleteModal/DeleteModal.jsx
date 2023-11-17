// DeleteModal.jsx
import React from "react";
import "./deleteModal.css";

const DeleteModal = ({ onDeleteConfirm, onDeleteCancel }) => {
  return (
    <div className="modal">
      <div className="delete-container">
        <h2>Delete Entry</h2>
        <p>Are you sure you want to delete this entry?</p>

        <div className="delete-btn-container">
        <button className="delete-button" onClick={onDeleteConfirm}>Delete</button>
        <button className="cancel-btn" onClick={onDeleteCancel}>Cancel</button>
        </div>
        
      </div>
    </div>
  );
};

export default DeleteModal;
