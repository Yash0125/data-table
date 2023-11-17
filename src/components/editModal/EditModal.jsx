// EditModal.jsx
import React from "react";
import "./editModal.css";

const EditModal = ({ value, onChange, onSave, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Name</h2>
        <input type="text" value={value} onChange={onChange} />
        <button className="delete-btn" onClick={onSave}>
          Save
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
