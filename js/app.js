/*Ejecuta html y luego ejecuta todo*/
window.onload = function() { /*onload->evento indica a window que se ejecute el javascript despues de que se ejecute el html antes de ejecutar bom*/
    var board = document.querySelector('.board-js'); /*Creamos un evento cuando realicemos click cumpla la funcion establecida */
    board.addEventListener('click', addX);
    var message = document.getElementById('message');
    message.addEventListener('click', reset);
};

/*Condicion para ingresar texto en la celda que este vacia y de forma alternativa */
var centinel = true;
function addX (event) { /*Creamos una funcion no anonima para nuestro evento textcontent*/
    if (event.target.matches('td') && event.target.textContent === '') {/*Corregimos el bugg o error que solo acepte al td y verifique q esta vacio la celda*/
        if (centinel)   /*(de forma alternativa muestre X - O - X...)*/
            event.target.textContent = 'X';            
            else
            event.target.textContent = 'O';      
            centinel = !centinel;  /*!centinel */  
            winner();     
        }
};

/*Declaracion de todos las variables de las 9 celdas para Tic-Tac-Toe */
var cell1 = document.getElementById('c1');
var cell2 = document.getElementById('c2');
var cell3 = document.getElementById('c3');
var cell4 = document.getElementById('c4');
var cell5 = document.getElementById('c5');
var cell6 = document.getElementById('c6');
var cell7 = document.getElementById('c7');
var cell8 = document.getElementById('c8');
var cell9 = document.getElementById('c9');
var again = document.getElementById('playagain'); /*Jugar de nuevo */

/*Creamos una función con una matriz para verificar a los ganadores*/
function winner() {
    matrix = [[cell1.textContent, cell2.textContent, cell3.textContent],
              [cell4.textContent, cell5.textContent, cell6.textContent],
              [cell7.textContent, cell8.textContent, cell9.textContent]];
    
    /*Despues de haber creado nuestra matriz verificaremos el ganador de manera horizontal y vertical*/
    for (i = 0; i < 3; i++) {
        if (matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]) {
            if (matrix[i][0] == 'X') {
                message.textContent = 'Ganaste!! jugador "X"';
            } else if (matrix[i][0] == 'O') {
                message.textContent = 'Ganaste!! Jugador "O"';
            }
        } else if (matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]) {
            if (matrix[0][i] == 'X') {
                message.textContent = 'Ganaste!! jugador "X"';
            } else if (matrix[0][i] == 'O') {
                message.textContent = 'Ganaste!! jugador "O"';
            }
        }
    }
    /*verificaremos por diagonales*/
    if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
        if (matrix[0][0] == 'X') {
            message.textContent = 'Ganaste!! jugador "X"';
        } else if (matrix[0][0] == 'O') {
            message.textContent = 'Ganaste!! Jugador "O"';
        }
    } else if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
        if (matrix[0][2] == 'X') {
            message.textContent = 'Ganaste!! jugador "X"';
        } else if (matrix[0][2] == 'O') {
            message.textContent = 'Ganaste!! jugador "O"';
        }
    }
    for (i = 0; i < 3; i++) {
        for (a = 0; a < 3; a++) {
            if (matrix[i][a].length == 0) {
                return 0;
            }
        }
    }
    message.textContent = 'Empate ¡Revancha!';
}

/*CLEANER THE CELLS WITH THE BUTTON (PLAY AGAIN)*/
again.onclick = function () { /*Evento onclick*/
    cell1.textContent = ''; /*Use the attribute *textContent* for the remplace cells */
    cell2.textContent = '';
    cell3.textContent = '';
    cell4.textContent = '';
    cell5.textContent = '';
    cell6.textContent = '';
    cell7.textContent = '';
    cell8.textContent = '';
    cell9.textContent = '';
    message.textContent = '';
  }
