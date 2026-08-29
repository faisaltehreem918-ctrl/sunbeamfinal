// Get the form
let form = document.getElementById("nutritionForm");


// When the user clicks "Create My Perfect Day"
form.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();


    // Get information from the form
    let age = Number(document.getElementById("age").value);

    let gender = document.getElementById("gender").value;

    let height = Number(document.getElementById("height").value);

    let weight = Number(document.getElementById("weight").value);

    let exercise = Number(document.getElementById("exercise").value);

    let goal = Number(document.getElementById("goal").value);


    // --------------------------------
    // Calculate BMR
    // --------------------------------

    let bmr;

    if (gender === "male") {

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) +
            5;

    }
    else {

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) -
            161;
    }


    // --------------------------------
    // Calculate calories
    // --------------------------------

    let calories;


    if (exercise === 1) {

        calories = bmr * 1.2;

    }

    else if (exercise === 2) {

        calories = bmr * 1.375;

    }

    else if (exercise === 3) {

        calories = bmr * 1.55;

    }

    else if (exercise === 4) {

        calories = bmr * 1.725;

    }


    // --------------------------------
    // Adjust calories based on goal
    // --------------------------------

    if (goal === 1) {

        // Lose weight
        calories = calories - 300;

    }

    else if (goal === 3) {

        // Gain weight
        calories = calories + 300;

    }


    // --------------------------------
    // Calculate nutrition
    // --------------------------------

    let protein = weight * 1.6;

    let fat = (calories * 0.25) / 9;

    let carbs =
        (calories - (protein * 4) - (fat * 9)) / 4;

    let water = weight * 0.035;


    // --------------------------------
    // Display results
    // --------------------------------

    document.getElementById("calories").textContent =
        calories.toFixed(0);

    document.getElementById("protein").textContent =
        protein.toFixed(0);

    document.getElementById("carbs").textContent =
        carbs.toFixed(0);

    document.getElementById("fat").textContent =
        fat.toFixed(0);

    document.getElementById("water").textContent =
        water.toFixed(1);

});