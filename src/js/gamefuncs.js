import { boardGameElement, inputElement } from "./domelements";

// NUMERO DE INTENTOS Y LONGITUD DE LA PALABRA 
const guesses = 5;
const wordLength = 5;

// PALABRA DEL JUEGO
let gameWord = '';

// VARIABLES DE NUMERO DE FILAS Y COLUMNAS (INTENTOS Y LETRAS DE LA PALABRA)
let row = 0;

// FUNCION PARA PINTAR EL TABLERO DE JUEGO 
export const initialize = () => {
    const fragment = document.createDocumentFragment();
    for (let r = 0; r < guesses; r++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let c = 0; c < wordLength; c++) {
            const cell = document.createElement('span');
            cell.classList.add('cell');
            cell.textContent = '';
            row.append(cell);
            fragment.append(row);
        }
    }
    boardGameElement.append(fragment);
    getGameWord();
}

// FUNCION PARA OBTENER LA PALABRA ALEATORIA DEL JUEGO EN CADA RONDA
const getGameWord = () => {
    // ARRAY DE PALABRAS
    const words = ['buzon', 'playa', 'fuego', 'linea', 'gatos', 'techo', 'mesas', 'pizza', 'piano', 'huevo'];
    const randomNumber = Math.floor(Math.random() * words.length);
    gameWord = words[randomNumber];
}

// FUNCION PARA AGREGAR PALABRA SI EL USUARIO LE DA A ENTER
export const addWord = (e) => {
    const word = inputElement.value;
    if (e.key === 'Enter') {
        console.log(gameWord);
        if (word.length === wordLength) {
            verifyWordLetters(word, gameWord)
            inputElement.value = '';
        } else {
            alert(`La palabra debe tener exactamente ${wordLength} letras`);
        }
    }
}

const paintLetterInCell = (letter, position, className) => {
	const element = boardGameElement.children[row].children[position];
	element.classList.add(className);
	element.textContent = letter;
};

// FUNCION PARA COMPROBAR POSICION DE LAS LETRAS Y AGREGAR ESTILO
const verifyWordLetters = word => {
	let wordToCheck = gameWord;
	let className;

	for (let i = 0; i < gameWord.length; i++) {
		const letter = word[i];

		if (letter === wordToCheck[i]) {
			className = 'correct';
			wordToCheck = wordToCheck.replace(letter, '*');
			paintLetterInCell(letter, i, className);
		}
	}

	for (let i = 0; i < gameWord.length; i++) {
		const letter = word[i];
		if (wordToCheck.includes(letter)) {
			className = 'contain';
			wordToCheck = wordToCheck.replace(letter, '*');
		} else {
			className = 'empty';
		}
		paintLetterInCell(letter, i, className);
	}

	row++;
};