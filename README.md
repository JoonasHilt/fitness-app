Nutrition/Fitness Plan Application

Project Overview

The Nutrition Plan Application is designed to help users calculate their daily calorie needs and macronutrient breakdown based on personal metrics, with an option to adjust macronutrient ratios dynamically. The application is targeted at individuals looking to understand and manage their daily nutritional requirements.

Key Features

    1.	User Input Form: Users enter basic metrics like age, weight, height, sex, goal (e.g., weight loss or muscle gain), diet preference, activity level, and preferred meal frequency. These inputs are used to tailor a personalized nutrition plan.
    2.	Calorie Requirement Calculation:
    •	We use the Mifflin-St Jeor equation to calculate the user’s Basal Metabolic Rate (BMR).
    •	The BMR is then multiplied by an activity multiplier (based on the user’s reported activity level) to estimate the Total Daily Energy Expenditure (TDEE), which represents the total daily calorie requirement.
    3.	Macronutrient Breakdown:
    •	The TDEE is divided into macronutrient targets (carbohydrates, proteins, and fats) based on initial default ratios (50% carbs, 20% protein, 30% fats).
    •	Macronutrient grams are calculated based on these ratios, with each gram of carbs and protein providing 4 kcal and each gram of fat providing 9 kcal.
    4.	Adjustable Macronutrient Ratios:
    •	Users can adjust the macronutrient percentages using sliders.
    •	When one macronutrient slider is adjusted, the remaining percentage is divided between the other two macronutrients to maintain a total of 100%.
    •	The macronutrient grams update dynamically as the ratios are adjusted, providing users with immediate feedback on their daily nutrient distribution.

Technology Stack

    •	Frontend: React with Vite for fast development and smooth reloading.
    •	Backend: json-server is used to simulate a backend, allowing us to save and retrieve user data during development.

Current Status

    •	The core functionality for capturing user input and calculating calorie requirements and macronutrient targets is complete.
    •	The UI includes interactive sliders for adjusting macronutrient ratios, with dynamic updates to the calculated values.
    •	Basic styling has been added to enhance the user experience, with further enhancements planned.

Next Steps

    •	Refine calorie calculation and ensure accuracy based on specific user goals (e.g., weight loss or muscle gain).
    •	Implement additional customization options for dietary preferences.
    •	Improve UI styling and consider adding more user feedback options.
