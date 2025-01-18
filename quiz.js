// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if an option is selected
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "red";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare user's answer with the correct answer and provide feedback
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
