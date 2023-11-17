// EditModal.jsx
import React from "react";
import "./editModal.css";

const EditModal = ({ value, onChange, onSave, onCancel }) => {
  return (
    <div className="modal">
      <div className="edit-container">
        <h3 className="edit-title">Edit Name</h3>
        <input className="edit-input" type="text" value={value} onChange={onChange} />
        <div className="edit-btn-container"> 
        <button className="save-btn" onClick={onSave}>
          Save
        </button>
        <button className="cancel-btn" onClick={onCancel}>Cancel</button>

        </div>
        
      </div>
    </div>
  );
};

export default EditModal;
