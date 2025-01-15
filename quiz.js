function checkAnswer() {
    // Correct answer is 4
    let correctAnswer = "4";
    
    // Get the user's selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Check if the user's answer is correct or incorrect
    let feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
