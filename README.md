#  Table Dashboard

<h3 align="center"> Table Dashboard is data table</h3>

## Table of contents
* [💻 Tech Stack](#tech-stack)
* [▶️ Demo](#demo)
* [About app and Comonents](#App-Info)
* [App.js](#App.js)
* [table.jsx](#table.jsx)
* [EditModal.jsx](#EditModal.jsx)
* [DeleteModal.jsx](#DeleteModal.jsx)


<a name="tech-stack"/>

## 💻 Tech Stack
**Front End:** HTML, CSS , Javascript , React
**Hosting:** Github, Netlify

<a name="demo"/>

## Demo
TO see live demo : [click for live demo](https://data-table-reactjs.netlify.app/).

<a name="App-Info"/>

## About app and Comonents
1. Components in the App:
   1. Table.jsx 
   2. EditModal.jsx
   3. DeleteModal.jsx
2. For data handling within this application, props are utilized. Each component, including Table.jsx, EditModal.jsx, and DeleteModal.jsx, receives and manages data through these props.

<a name="App.js"/>

## App.js
- **Data Fetching:**
  - Uses async/await for API data fetching.
  
- **Component Integration:**
  - Passes fetched data to Table.jsx using props.
  - Manages editing in EditModal.jsx and deletion in DeleteModal.jsx.

- **Initialization:**
  - Utilizes useEffect to fetch data on component mount.
  - Orchestrates overall app functionality.

<a name="table.jsx"/>

## table.jsx
![data-table](assets/table.png)
- **Data Rendering:**
  - Populates the table with data from props.

- **Edit and Delete:**
  - Provides buttons for editing and deleting rows.
  - Redirects to EditModal.jsx and DeleteModal.jsx, respectively.

- **Data Handling:**
  - Manages data from props for rendering and interactions.
  - Communicates edit and delete actions to the parent component (App.js).

<a name="EditModal.jsx"/>



## EditModal.jsx
![data-table](assets/editModal.png)

- **Edit Form:**
  - Displays an input field for editing data.

- **Save and Cancel:**
  - Triggers onSave and onCancel functions received as props from App.js.

- **Data Handling:**
  - Manages edited data and interactions via props.

- **Interaction with Parent (App.js):**
  - Communicates save and cancel actions to the parent.

<a name="DeleteModal.jsx"/>

## DeleteModal.jsx

![data-table](assets/deleteModal.png)

- **Confirmation Modal:**
  - Asks for confirmation before deleting an entry.

- **Buttons:**
  - "Delete" and "Cancel" buttons trigger onDeleteConfirm and onDeleteCancel functions.

- **Interaction with Parent (App.js):**
  - Communicates delete and cancel actions to the parent component.
