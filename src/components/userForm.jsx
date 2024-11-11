// src/components/UserForm.jsx
import React, { useState } from "react";
import "./UserForm.css";

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    goalWeight: "",
    sex: "",
    dietPreference: "anything",
    activityLevel: "",
    weeklyWorkout: "",
    mealsPerDay: "", // Set initial empty value for the placeholder effect
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
        placeholder="Height (cm)"
      />
      <input
        type="number"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Current Weight (kg)"
      />
      <input
        type="number"
        name="goalWeight"
        value={formData.goalWeight}
        onChange={handleChange}
        placeholder="Goal Weight (kg)"
      />

      <select
        name="sex"
        value={formData.sex}
        onChange={handleChange}
        className={formData.sex === "" ? "placeholder" : ""}
      >
        <option value="">Select Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <select
        name="dietPreference"
        value={formData.dietPreference}
        onChange={handleChange}
        className={formData.dietPreference === "" ? "placeholder" : ""}
      >
        <option value="anything">Anything</option>
        <option value="ketogenic">Ketogenic</option>
        <option value="mediterranean">Mediterranean</option>
        <option value="paleo">Paleo</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="plant-based">Plant-Based</option>
      </select>

      <select
        name="activityLevel"
        value={formData.activityLevel}
        onChange={handleChange}
        className={formData.activityLevel === "" ? "placeholder" : ""}
      >
        <option value="">Select Daily Activity Level</option>
        <option value="very light">Very Light</option>
        <option value="light">Light</option>
        <option value="moderate">Moderate</option>
        <option value="heavy">Heavy</option>
        <option value="very intense">Very Intense</option>
      </select>

      <select
        name="weeklyWorkout"
        value={formData.weeklyWorkout}
        onChange={handleChange}
        className={formData.weeklyWorkout === "" ? "placeholder" : ""}
      >
        <option value="">Select Weekly Exercise Level</option>
        <option value="light">Light (1-3 hours)</option>
        <option value="moderate">Moderate (3-4 hours)</option>
        <option value="intense">Intense (4-6 hours)</option>
        <option value="very intense">Very Intense (7+ hours)</option>
      </select>

      {/* Meals per day with placeholder style */}
      <label>
        <input
          type="number"
          name="mealsPerDay"
          value={formData.mealsPerDay}
          onChange={handleChange}
          min="1"
          max="8"
          placeholder="how many meals per day you prefer?"
          className={formData.mealsPerDay === "" ? "placeholder" : ""}
        />
      </label>

      <button type="submit">Generate Plan</button>
    </form>
  );
};

export default UserForm;
