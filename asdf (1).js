const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "What is the largest planet in the solar system?",
        options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        answer: 0
    },
    {
        question: "What is the currency of Japan?",
        options: ["Yen", "Yuan", "Euro", "Dollar"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const option = document.createElement("input");
        option.type = "radio";
        option.id = `option-${i}`;
        option.name = "question";
        option.value = i;

        const optionLabel = document.createElement("label");
        optionLabel.for = `option-${i}`;
        optionLabel.textContent = question.options[i];

        optionsContainer.appendChild(option);
        optionsContainer.appendChild(optionLabel);
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked');

    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const answer = parseInt(selectedOption.value);

    if (answer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        const results = document.getElementById("results");
        results.textContent = `Your score is ${score} out of ${questions.length}`;
    }
}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", submitAnswer);

displayQuestion();
