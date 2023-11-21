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
const showWordOnBoard = (word, gameWord) => {
    for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
            const currRow = boardGameElement.children[row];
            const currCell = currRow.children[col];
            currCell.textContent = word[i];
            col++;
            if (col === wordLength) {
                col = 0;
                row++;
            }
        }, i * 500);
    }
}


// EVENTO DE ESCUCHA PARA OBTENER EL VALOR DEL INPUT Y SABER CUANDO HA PRESIONADO ENTER EL USUARIO PARA INTRODUCIR LA PALABRA
inputElement.addEventListener('keyup', (e) => {
    const word = inputElement.value;
    if (e.key === 'Enter') {
        if (word.length === wordLength) {
            showWordOnBoard(word, gameWord);
            // verifyWordLetters(word, gameWord)
            inputElement.value = '';
        } else {
            alert(`La palabra debe tener exactamente ${wordLength} letras`);
        }
    }
});

// // FUNCION PARA COMPROBAR POSICION DE LAS LETRAS Y SI LAS CONTIENE

// const verifyWordLetters = (word, gameWord) => {
//     for (let i = 0; i < word.length; i++) {
        
//     }
// }   