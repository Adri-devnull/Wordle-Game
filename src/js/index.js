const boardGameElement = document.getElementById('board-game');
const inputElement = document.getElementById('input');

const guesses = 5;
const wordLength = 5;
let col = 0;
let row = 0;

const initialize = () => {
    for (let r = 0; r < guesses; r++) {
        for (let c = 0; c < wordLength; c++) {
            const cell = document.createElement('span');
            cell.id = r.toString() + "-" + c.toString()
            cell.classList.add('cell');
            cell.textContent = '';
            boardGameElement.append(cell);
        }
    }
}

initialize();

inputElement.addEventListener('keyup', (e) => {
    const word = inputElement.value;
    if (e.key === 'Enter') {
        if (word.length === wordLength) {
            showWordOnBoard(word);
            inputElement.value = '';
        } else {
            alert(`La palabra debe tener exactamente ${wordLength} letras`);
        }
    }
});


const showWordOnBoard = (word) => {
    for (let i = 0; i < word.length; i++) {
        setTimeout(() => {
            const currCell = document.getElementById(row.toString() + '-' + col.toString());
            currCell.textContent = word[i];
            col++;
            if (col === wordLength) {
                col = 0;
                row++;
            }
        }, i * 500);
    }
}
