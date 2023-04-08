var questions = [
	{
		question: "¿El sol gira alrededor de la tierra?",
		answer: false
	},
	{
		question: "¿El agua hierve a 100 grados centígrados?",
		answer: true
	},
	{
		question: "¿Los seres humanos tienen 3 pulmones?",
		answer: false
	},
	{
		question: "¿La luna tiene luz propia?",
		answer: false
	},
	{
		question: "¿El color del caballo blanco de Napoleón era blanco?",
		answer: true
	}
];

var shuffledQuestions = shuffle(questions);
var currentQuestion = 0;
var score = 0;
var highScore = localStorage.getItem("highScore") || 0;

function shuffle(array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function checkAnswer(userAnswer) {
	var result = document.getElementById("result");

	if (userAnswer === shuffledQuestions[currentQuestion].answer) {
		result.innerHTML = "¡Correcto!";
		score++;
	} else {
		result.innerHTML = "Incorrecto. La respuesta correcta es " + (shuffledQuestions[currentQuestion].answer ? "verdadero" : "falso") + ".";
	}

	currentQuestion++;

	if (currentQuestion < shuffledQuestions.length) {
		document.getElementById("question").innerHTML = shuffledQuestions[currentQuestion].question;
	} else {
		document.getElementById("question").innerHTML = "¡Fin del juego!";
		document.getElementsByTagName("div")[0].style.display = "none";
		result.innerHTML += " Obtuviste " + score + " puntos.";

		if (score > highScore) {
			highScore = score;
			localStorage.setItem("highScore", highScore);
			result.innerHTML += " ¡Nueva puntuación máxima!";
		} else {
			result.innerHTML += " Puntuación máxima: " + highScore;
		}
	}
}
