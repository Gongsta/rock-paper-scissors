let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_div = document.querySelector(".result");
const scoreBoard_div = document.querySelector(".score-board");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r', 'p','s']
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win() {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

}

function lose() {

}
function draw() {
	
}

function game(userChoice) {
	console.log('poop' + userChoice);
	const computerChoice = getComputerChoice();

	switch (userChoice + computerChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win();
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose();
			break;

		case 'rr':
		case 'pp':
		case 'ss':
			draw();
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