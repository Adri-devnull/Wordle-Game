import {initialize, getGameWord, addWord} from "./gamefuncs";
import {inputElement} from "./domelements"

// LLAMAMOS A LA FUNCION PARA PINTAR EL TABLERO NADA MAS CARGUE LA PAGINA
document.addEventListener('DOMContentLoaded', () => {
    initialize();
    getGameWord();
});


// EVENTO DE ESCUCHA PARA OBTENER EL VALOR DEL INPUT Y SABER CUANDO HA PRESIONADO ENTER EL USUARIO PARA INTRODUCIR LA PALABRA
inputElement.addEventListener('keyup', (e) => {
    addWord(e)
});
