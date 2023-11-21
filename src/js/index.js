import { initialize, addWord } from "./gamefuncs";
import { inputElement } from "./domelements";

// LLAMAR A LA FUNCION DE PINTAR EL TABLERO NADA MAS CARGUE LA PAGINA
initialize()

// EVENTO DE ESCUCHA PARA OBTENER EL VALOR DEL INPUT Y SABER CUANDO HA PRESIONADO ENTER EL USUARIO PARA INTRODUCIR LA PALABRA
inputElement.addEventListener('keyup', (e) => {
    addWord(e)
});
