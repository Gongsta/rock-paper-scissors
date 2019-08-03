let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const result_p = document.querySelector(".result > p");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r','p','s']
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "s") return "Scissors";
	return "Paper";
}

function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);

}
function draw(userChoice, computerChoice) {
	const smallUserWord = "user".fontsize(3).sup();
	const smallCompWord = "comp".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.😞`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
}

function game(userChoice) {
	let computerChoice = getComputerChoice();

	switch (userChoice + computerChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, computerChoice);
			break;

		case 'rr':
		case 'pp':
		case 'ss':
			draw(userChoice, computerChoice);
			break;
	}

}

function main() {
	rock_div.addEventListener('click', function() {
		game("r");
		console.log("hey you clicked on rock");
	})

	paper_div.addEventListener('click', function() {
		game("p");
		console.log("hey you clicked on paper");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
		console.log("hey you clicked on scissors");
	})

}

main();