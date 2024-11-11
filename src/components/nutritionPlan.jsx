// src/components/NutritionPlan.jsx
import React, { useState, useEffect } from "react";
import "./NutritionPlan.css"; // Import the CSS file

const NutritionPlan = ({ userData }) => {
  const [calories, setCalories] = useState(0);
  const [macros, setMacros] = useState({
    carbs: 50, // Initial ratio for carbs (50%)
    protein: 20, // Initial ratio for protein (20%)
    fats: 30, // Initial ratio for fats (30%)
  });
  const [macroGrams, setMacroGrams] = useState({
    carbs: 0,
    protein: 0,
    fats: 0,
  });

  // Calculate BMR and TDEE based on userData
  const calculateCalories = (data) => {
    const { weight, height, age, sex, activityLevel } = data;

    // Mifflin-St Jeor Equation for BMR
    const BMR =
      sex === "male"
        ? 10 * weight + 6.25 * height - 5 * age + 5
        : 10 * weight + 6.25 * height - 5 * age - 161;

    // Activity multipliers
    const activityMultipliers = {
      "very light": 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725,
      "very intense": 1.9,
    };

    const multiplier = activityMultipliers[activityLevel] || 1.2; // default to 1.2 if undefined
    return Math.round(BMR * multiplier); // TDEE (Total Daily Energy Expenditure)
  };

  // Initial calculation of calorie needs and macronutrient grams
  useEffect(() => {
    const initialCalories = calculateCalories(userData);
    setCalories(initialCalories);
    updateMacroGrams(macros, initialCalories);
  }, [userData]);

  const updateMacroGrams = (ratios, totalCalories) => {
    const carbsGrams = Math.round((totalCalories * (ratios.carbs / 100)) / 4);
    const proteinGrams = Math.round(
      (totalCalories * (ratios.protein / 100)) / 4
    );
    const fatsGrams = Math.round((totalCalories * (ratios.fats / 100)) / 9);

    setMacroGrams({
      carbs: carbsGrams,
      protein: proteinGrams,
      fats: fatsGrams,
    });
  };

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    const newValue = parseInt(value);

    const remainingPercentage = 100 - newValue;

    const otherMacros = Object.keys(macros).filter((macro) => macro !== name);
    const newOtherMacroValue = Math.round(remainingPercentage / 2);

    const newMacros = {
      ...macros,
      [name]: newValue,
      [otherMacros[0]]: newOtherMacroValue,
      [otherMacros[1]]: remainingPercentage - newOtherMacroValue,
    };

    setMacros(newMacros);
    updateMacroGrams(newMacros, calories);
  };

  return (
    <div className="nutrition-plan-container">
      <h2>Your Daily Macronutrient Plan</h2>
      <div className="nutrition-summary">
        <p>
          Daily Calories: <strong>{calories} kcal</strong>
        </p>
      </div>

      <div className="macronutrient-section">
        <h3>Macronutrient Breakdown (grams per day)</h3>
        <p>Carbs: {macroGrams.carbs}g</p>
        <p>Protein: {macroGrams.protein}g</p>
        <p>Fats: {macroGrams.fats}g</p>
      </div>

      <h3>Adjust Macronutrient Ratios</h3>
      <div className="slider-container">
        <label>
          Carbs: {macros.carbs}%
          <input
            type="range"
            name="carbs"
            min="0"
            max="100"
            value={macros.carbs}
            onChange={handleSliderChange}
          />
        </label>
      </div>

      <div className="slider-container">
        <label>
          Protein: {macros.protein}%
          <input
            type="range"
            name="protein"
            min="0"
            max="100"
            value={macros.protein}
            onChange={handleSliderChange}
          />
        </label>
      </div>

      <div className="slider-container">
        <label>
          Fats: {macros.fats}%
          <input
            type="range"
            name="fats"
            min="0"
            max="100"
            value={macros.fats}
            onChange={handleSliderChange}
          />
        </label>
      </div>

      <p className="total-ratio">
        Total Ratio: {macros.carbs + macros.protein + macros.fats}% (must equal
        100%)
      </p>
    </div>
  );
};

export default NutritionPlan;
