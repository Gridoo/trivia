var questions = [
	{
		question: "El cielo es azul.",
		answer: true
	},
	{
		question: "El agua moja.",
		answer: true
	},
	{
		question: "La tierra es plana.",
		answer: false
	},
	{
		question: "La luna es un planeta.",
		answer: false
	},
	{
		question: "Los humanos tienen 2 piernas.",
		answer: true
	},
	{
		question: "El sol gira alrededor de la tierra.",
		answer: false
	},
	{
		question: "El oro es un metal precioso.",
		answer: true
	},
	{
		question: "El agua hierve a 100 grados Celsius.",
		answer: true
	},
	{
		question: "El viento es una corriente de agua.",
		answer: false
	},
	{
		question: "El queso es un producto lácteo.",
		answer: true
	}
];

var usedQuestions = [];

function initQuestions() {
	usedQuestions = [];
}

function getNextQuestion() {
	if (usedQuestions.length === questions.length) {
		return null; // todas las preguntas han sido utilizadas
	}

	var randomIndex = Math.floor(Math.random() * questions.length);

	while (usedQuestions.includes(randomIndex)) {
		randomIndex = Math.floor(Math.random() * questions.length);
	}

	usedQuestions.push(randomIndex);

	return questions[randomIndex];
}

var score = 0;
var maxScore = 0;
var currentQuestion = null;

var questionElement = document.getElementById("question");
var pointsElement = document.getElementById("points");
var maxPointsElement = document.getElementById("maxPoints");

var trueButton = document.getElementById("trueButton");
var falseButton = document.getElementById("falseButton");
var startButton = document.getElementById("startButton");

trueButton.addEventListener("click", function() {
	if (currentQuestion.answer === true) {
		score++;
	}
	
	displayNextQuestion();
});

falseButton.addEventListener("click", function() {
	if (currentQuestion.answer === false) {
		score++;
	}
	
	displayNextQuestion();
});

startButton.addEventListener("click", function() {
	score = 0;
	maxScore = getMaxScore();
	initQuestions();
	displayNextQuestion();
	startButton.style.display = "none";
});

function getMaxScore() {
	var maxScore = localStorage.getItem("maxScore");
	
	if (maxScore === null) {
		maxScore = 0;
	}
	
	return parseInt(maxScore);
}

function setMaxScore(maxScore) {
	localStorage.setItem("maxScore", maxScore.toString());
}

function displayQuestion(question) {
	questionElement.textContent = question.question;
}

function displayScore() {
	pointsElement.textContent = score;
	maxPointsElement.textContent = maxScore;
}

function displayNextQuestion() {
	var nextQuestion = getNextQuestion();
	
	if (nextQuestion === null) {
		alert("Fin del juego. Tu puntuación máxima es " + maxScore + ".");
		startButton.style.display = "inline-block";
		
		if (score > maxScore) {
			maxScore = score;
			setMaxScore(maxScore);
		}
		
		score = 0;
	} else {
		currentQuestion = nextQuestion;
		displayQuestion(currentQuestion);
		displayScore();
	}
}

displayNextQuestion();

trueButton.addEventListener("click", function() {
	if (currentQuestion.answer === true) {
		score++;
	}
	
	displayNextQuestion();
});

falseButton.addEventListener("click", function() {
	if (currentQuestion.answer === false) {
		score++;
	}
	
	displayNextQuestion();
});

function displayNextQuestion() {
	var nextQuestion = getNextQuestion();
	
	if (nextQuestion === null) {
		alert("Fin del juego. Tu puntuación máxima es " + maxScore + ".");
		startButton.style.display = "inline-block";
		
		if (score > maxScore) {
			maxScore = score;
			setMaxScore(maxScore);
		}
		
		score = 0;
		usedQuestions = [];
	} else {
		currentQuestion = nextQuestion;
		displayQuestion(currentQuestion);
		displayScore();
	}
}
