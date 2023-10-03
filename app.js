document.getElementById("calculateButton").addEventListener("click", function () {
    // Get weight and height input values
    const weight = parseFloat(document.getElementById("weightInput").value);
    const height = parseFloat(document.getElementById("heightInput").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid weight and height.");
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // Interpret the BMI result
    let interpretation = "";
    if (bmi < 18.5) {
        interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Overweight";
    } else {
        interpretation = "Obese";
    }

    // Display the BMI result and interpretation
    const resultContainer = document.getElementById("bmiResult");
    resultContainer.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    const interpretationContainer = document.getElementById("interpretation");
    interpretationContainer.textContent = interpretation;

    // Show the result and interpretation boxes
    const bmiResultBox = document.getElementById("bmiResultBox");
    const interpretationBox = document.getElementById("interpretationBox");

    bmiResultBox.style.display = "block";
    interpretationBox.style.display = "block";
});

// Add an event listener for the "Clear" button.
document.getElementById("clearButton").addEventListener("click", function () {
    // Clear the input fields.
    document.getElementById("weightInput").value = "";
    document.getElementById("heightInput").value = "";

    // Hide the result and interpretation boxes.
    const bmiResultBox = document.getElementById("bmiResultBox");
    const interpretationBox = document.getElementById("interpretationBox");

    bmiResultBox.style.display = "none";
    interpretationBox.style.display = "none";
});