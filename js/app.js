window.onload = function() { /*onload->evento indica a window que se ejecute el javascript despues de que se ejecute el html antes de ejecutar bom*/
    var board = document.querySelector('.board-js'); /*Creamos un evento cuando realicemos click cumpla la funcion establecida */
    board.addEventListener('click', addX);
};
    var centinel = true;
    function addX(event) { /*Creamos una funcion no anonima para nuestro evento textcontent*/
        if (event.target.matches('td') && event.target.textContent === '') {/*Corregimos el bugg o error que solo acepte al td y verifique q esta vacio la celda*/
            if (centinel)   /*(de forma alternativa muestre X - O - X...)*/
                event.target.textContent='X';            
            else 
                event.target.textContent='O';      
            centinel = !centinel;  /*!centinel */       
    }
}