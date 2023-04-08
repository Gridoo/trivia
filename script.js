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
	}
];

var currentQuestion = 0;

function checkAnswer(userAnswer) {
	var result = document.getElementById("result");

	if (userAnswer === questions[currentQuestion].answer) {
		result.innerHTML = "¡Correcto!";
	} else {
		result.innerHTML = "Incorrecto. La respuesta correcta es " + (questions[currentQuestion].answer ? "verdadero" : "falso") + ".";
	}

	currentQuestion++;

	if (currentQuestion < questions.length) {
		document.getElementById("question").innerHTML = questions[currentQuestion].question;
	} else {
		document.getElementById("question").innerHTML = "¡Fin del juego!";
		document.getElementsByTagName("div")[0].style.display = "none";
	}
}
