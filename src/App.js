import './App.css';

import React, { useState, useEffect } from "react";
import Table from "./components/table/Table";

function App() {
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://assets.alippo.com/catalog/static/data.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (rowIndex) => {
    // Set the selected row for editing
    setSelectedRow(rowIndex);
  };

  const handleDelete = (rowIndex) => {
    // Set the selected row for deletion
    setSelectedRow(rowIndex);
  };

  const handleEditSave = (newName) => {
    // Update the name of the selected row
    setData((prevData) => {
      const newData = [...prevData];
      newData[selectedRow] = { ...newData[selectedRow], name: newName };
      return newData;
    });
    // Clear the selected row after saving edits
    setSelectedRow(null);
  };

  const handleCancel = () => {
    // Clear the selected row on cancel
    setSelectedRow(null);
  };

  const handleDeleteConfirm = () => {
    // Remove the selected row from the data
    setData((prevData) => prevData.filter((_, index) => index !== selectedRow));
    // Clear the selected row after deletion
    setSelectedRow(null);
  };

  return (
    <div className="App">
      <h1>Table Dashboard</h1>
      <Table
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onEditSave={handleEditSave}
        onCancel={handleCancel}
        selectedRow={selectedRow}
        onDeleteConfirm={handleDeleteConfirm}
      />
    </div>
  );
}

export default App;

