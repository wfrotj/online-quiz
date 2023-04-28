// Define quiz questions and answers

const quizQuestions = [
  {
    question: "1. What are the major instruments in Kulintang Ensemble?",
    options: [
      "A. Laud, Banduria, Guitar, Bajo De Unas, Piano",
      "B. Kulintang, Agung, Gandingan, Dabakan, Babandil",
      "C. Xylophone, Guitar, Drums, Piano, Flute",
      "D. None of the Above",
    ],
    answer: "B. Kulintang, Agung, Gandingan, Dabakan, Babandil",
  },
  {
    question: "2. Why mindanao is known as the land of promise?",
    options: [
      "A. Because of its total land area that can accomodate large agricutural crops",
      "B. Because of the Sarimanok that gives good fortune to the maranao",
      "C. Because of it is rich in biodiversity and natural resources",
      "D. It is not really known as the land of promise",
    ],
    answer: "C. Because of it is rich in biodiversity and natural resources",
  },
  {
    question:
      "3. What do you call to the vocal music of Mindanao used for serenading his/her loved ones.",
    options: ["A. Lugu", "B. Kalangan", "C. Lunsey", "Yaya"],
    answer: "B. Kalangan",
  },
  {
    question:
      "4. What do you call to the vocal music of Mindanao used in reading his/her Qur'an and other books in his/her Islam religion?",
    options: ["A. Lugu", "B. Kalangan", "C. Lunsey", "Yaya"],
    answer: "A. Lugu",
  },
  {
    question:
      "5. Which of the following BEST describes the vocal repertoire Lunsey?",
    options: [
      "A. It is a song of the Yakans to put the baby to sleep.",
      "B. It is sacred songs highlighted by the quotations from the Qur'an",
      "C. It is songs used for serenading his/her loved ones.",
      "D. It is an important chant to be sung by the wife to be during the ceremony that talks about married life.",
    ],
    answer:
      "D. It is an important chant to be sung by the wife to be during the ceremony that talks about married life.",
  },
];

const userName = document.getElementById("name-input");
const userSection = document.getElementById("section-input");

// Get HTML elements
const quizSection = document.querySelector(".quiz-section");
const scoreSection = document.querySelector(".score-section");
const scoreDisplay = document.querySelector("#score");
const submitButton = document.querySelector("#submit-btn");
const resetButton = document.querySelector("#reset-btn");

// Initialize quiz score
let score = 0; // initialize the score variable to 0

// Create a function to display quiz questions
function displayQuiz() {
  let output = "";
  quizQuestions.forEach((question, questionNumber) => {
    let options = "";
    question.options.forEach((option, index) => {
      options += `
              <li>
                 <input type="radio" name="question${questionNumber}" value="${option}">
                 <label>${option}</label>
              </li>
           `;
    });
    output += `
           <div class="question-container">
              <h4>${question.question}</h4>
              <ul>
                 ${options}
              </ul>
           </div>
        `;
  });
  quizSection.innerHTML = output;
}

// Create a function to check quiz answers
function checkAnswers() {
  event.preventDefault();

  if (userName.value === "" || userSection.value === "") return;
  let answers = [];
  quizQuestions.forEach((question, questionNumber) => {
    let selectedOption = document.querySelector(
      `input[name="question${questionNumber}"]:checked`
    );
    if (selectedOption) {
      answers.push(selectedOption.value);
    }
  });
  answers.forEach((answer, answerNumber) => {
    if (answer === quizQuestions[answerNumber].answer) {
      score++;
    }
  });

  // Create a new element to display the score
  document.body.innerHTML = `<h1>Congratulations ${userName.value} of ${userSection.value}! You scored ${score} out of ${quizQuestions.length}</h1>`;

  // Append the score element to the score display section
  scoreSection.appendChild(scoreElement);

  // Show the score display section
  scoreSection.style.display = "block";

  // Disable the submit button
  submitButton.disabled = true;

  // Enable the reset button
  resetButton.disabled = false;
}

// Create a function to reset the quiz
function resetQuiz() {
  // Reset quiz score
  score = 0;

  // Reset score display
  scoreDisplay.textContent = "";

  // Reset score section
  scoreSection.style.display = "none";
  scoreSection.innerHTML = "";

  // Reset quiz answers
  const quizInputs = document.querySelectorAll('input[type="radio"]');
  quizInputs.forEach((input) => {
    input.checked = false;
  });

  // Enable the submit button
  submitButton.disabled = false;

  // Disable the reset button
  resetButton.disabled = true;
}

// Call the displayQuiz() function to display the quiz questions
displayQuiz();

// Add event listener to the submit button
submitButton.addEventListener("click", checkAnswers);
// Add event listener to the reset button

// Disable the reset button initially
