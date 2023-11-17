// Table.jsx
import React, { useState } from "react";
import EditModal from "../editModal/EditModal";
import DeleteModal from "../deleteModal/DeleteModal";
import './table.css'

const Table = ({
  data,
  onEdit,
  onDelete,
  onEditSave,
  onCancel,
  selectedRow,
  onDeleteConfirm,
  setSelectedRow
}) => {
  const [editedName, setEditedName] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showTable, setShowTable] = useState(true);

  const handleEdit = (index) => {
    setShowTable(false);
    onEdit(index);
    setEditedName(data[index]?.name || "");
  };

  const handleDelete = (index) => {
    setShowTable(false);
    onDelete(index);
    setShowDeleteModal(true);
  };

  const handleEditSave = () => {
    onEditSave(editedName);
    setEditedName("");
    setShowTable(true); // Set showTable to true after saving edit
  };

  const handleCancel = () => {
    onCancel();
    setEditedName("");
    setShowTable(true); // Set showTable to true after canceling edit
  };

  const handleDeleteConfirm = () => {
    onDeleteConfirm();
    setShowDeleteModal(false);
    setShowTable(true); // Set showTable to true after confirming delete
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setShowTable(true); // Set showTable to true after canceling delete
    setSelectedRow(null)
  };

  return (
    <div className="container">
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>SL.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Pin Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name || "-"}</td>
                <td>{row.age}</td>
                <td>{row.city}</td>
                <td>{row.pinCode || "-"}</td>
                <td>
                  <div className="btn-container">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {(selectedRow !== null && !showDeleteModal) && (
        <EditModal
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          onSave={handleEditSave}
          onCancel={handleCancel}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          onDeleteConfirm={handleDeleteConfirm}
          onDeleteCancel={handleDeleteCancel}
        />
      )}
    </div>
  );
};

export default Table;
