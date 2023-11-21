// ELEMENTOS DEL DOM
const boardGameElement = document.getElementById('board-game');
const inputElement = document.getElementById('input');

// NUMERO DE INTENTOS Y LONGITUD DE LA PALABRA 
const guesses = 5;
const wordLength = 5;

// PALABRA DEL JUEGO
let gameWord = '';

// VARIABLES DE NUMERO DE FILAS Y COLUMNAS (INTENTOS Y LETRAS DE LA PALABRA)
let col = 0;
let row = 0;

// FUNCION PARA PINTAR EL TABLERO DE JUEGO 
const initialize = () => {
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
}

// LLAMAMOS A LA FUNCION PARA PINTAR EL TABLERO NADA MAS CARGUE LA PAGINA
document.addEventListener('DOMContentLoaded', () => {
    initialize();
    getGameWord();
});


// FUNCION PARA OBTENER LA PALABRA ALEATORIA DEL JUEGO EN CADA RONDA
const getGameWord = () => {
    // ARRAY DE PALABRAS
    const words = ['buzon', 'playa', 'fuego', 'linea', 'gatos', 'techo', 'mesas', 'pizza', 'piano', 'huevo'];
    const randomNumber = Math.floor(Math.random() * words.length);
    gameWord = words[randomNumber];
}


// FUNCION PARA PINTAR LAS LETRAS DE LA PALABRA QUE INTRODUZCA EL USUARIO
const showWordOnBoard = (word, className) => {
    for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
            const currRow = boardGameElement.children[row];
            const currCell = currRow.children[col];
            currCell.classList.add(className)
            currCell.textContent = word[i];
            col++;
            if (col === wordLength) {
                col = 0;
                row++;
            }
        }, i * 500);
    }
}

// FUNCION PARA AGREGAR PALABRA SI EL USUARIO LE DA A ENTER
const addWord = (e) => {
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

// EVENTO DE ESCUCHA PARA OBTENER EL VALOR DEL INPUT Y SABER CUANDO HA PRESIONADO ENTER EL USUARIO PARA INTRODUCIR LA PALABRA
inputElement.addEventListener('keyup', (e) => {
    addWord(e)
});



const checkletter = (letter) => {
    return gameWord.includes(letter);
}


// // FUNCION PARA COMPROBAR POSICION DE LAS LETRAS Y SI LAS CONTIENE

const verifyWordLetters = (word, gameWord) => {
    let className;
    for (let i = 0; i < word.length; i++) {
        const foundLetter = checkletter(word[i]);
        console.log(foundLetter);
        if (!foundLetter) {
            console.log(`la ${word[i]} no esta`);
            className = 'empty'
        } else {
            console.log(`Contiene la letra ${word[i]}`);
            className = 'contain'
            if (gameWord[i] === word[i]) {
                console.log(`la letra ${word[i]} esta en la misma posicion`);
                className = 'correct'
            }
        }
    }
    showWordOnBoard(word, className);
}

