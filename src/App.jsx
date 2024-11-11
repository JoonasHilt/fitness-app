// src/App.jsx
import React, { useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import "./App.css"; // Import the main CSS

function App() {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    // Save new user data to `json-server`
    axios
      .post("http://localhost:8000/users", data)
      .then((response) => {
        setUserData(response.data); // Store submitted user data locally
        console.log("User Data Submitted and Saved:", response.data);
      })
      .catch((error) => {
        console.error("There was an error saving the data!", error);
      });
  };

  return (
    <div className="container">
      <h1>Nutrition Plan App</h1>

      {/* Form for submitting new user data */}
      {!userData ? (
        <UserForm onSubmit={handleFormSubmit} />
      ) : (
        <div>
          <h2>Nutrition Plan for Submitted User</h2>
          <p>Calorie and macro calculations will go here!</p>
        </div>
      )}
    </div>
  );
}

export default App;
