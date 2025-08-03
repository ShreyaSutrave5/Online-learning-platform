// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
  const quizForm = document.getElementById('quiz-form');
  const resultDiv = document.getElementById('quiz-result');
  const scoreDisplay = document.getElementById('quiz-score');
  const lessonsCompleted = document.getElementById('lessons-completed');

  let totalLessons = 10; // Example: total number of lessons in the course
  let completedLessons = 1; // Hardcoded for demo. Replace with dynamic tracking if needed.

  // Show completed lessons in progress section
  lessonsCompleted.textContent = completedLessons;

  // Handle quiz submission
  quizForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Correct answers
    const answers = {
      q1: 'b',
      q2: 'c'
    };

    let score = 0;
    let total = Object.keys(answers).length;

    // Check user answers
    for (let question in answers) {
      let selected = quizForm.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === answers[question]) {
        score++;
      }
    }

    // Display score
    let percent = Math.round((score / total) * 100);
    resultDiv.textContent = `You scored ${score} out of ${total} (${percent}%)`;
    scoreDisplay.textContent = percent;
  });
});
