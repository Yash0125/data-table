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

![data-table](assets/editModal.png)

## EditModal.jsx
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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
