window.onload = () => {
var Board = (function () {
    var myBoard = {};
    var gameBoard = [
        {id: 0, b: ' '},
        {id: 1, b: ' '},
        {id: 2, b: ' '},
        {id: 3, b: ' '},
        {id: 4, b: ' '},
        {id: 5, b: ' '},
        {id: 6, b: ' '},
        {id: 7, b: ' '},
        {id: 8, b: ' '},];

        const playerFactory = (name, symbol) => {
    
            var player ={};
            player.name = name;
            player.symbol = symbol;
            
            
            return player;
        };
        const player1 = playerFactory('Player X', 'X');
        const player2 = playerFactory('Player O', 'O');

        
    
    myBoard.addCard =function() {
        const cells = document.getElementById('board');
        
        
        for(let x = 0; x < gameBoard.length; x++) {
            let cell =document.createElement('div');
            cell.classList.add('cell');
            let playerMark = document.createElement('button');
            playerMark.classList.add('mark');
            playerMark.setAttribute('id', 'space');
            playerMark.setAttribute('value', 'empty');

            const object = gameBoard.find(obj => obj.id == x);

            playerMark.innerHTML = object['b'];
        
            cells.appendChild(cell);
            cell.appendChild(playerMark);

            var currentPlayer = player1;
            var selecSpot = true;

            cell.addEventListener('click', () => {


                if (playerMark.innerHTML === ' ') {
                    playerMark.innerHTML = currentPlayer['symbol'];
                    console.log(currentPlayer);
                    gameBoard[x].b = currentPlayer['symbol'];
                    console.log(gameBoard);
                    selecSpot = true;
                } else {
                    alert('Invalid Selection');
                    console.log(playerMark.innerHTML);
                    selecSpot = false;
                }
            })

            cell.addEventListener('click', () =>{

                if (currentPlayer == player1 && selecSpot === true) {
                    currentPlayer = player2;
                    return currentPlayer;
                } else if (currentPlayer == player2 && selecSpot === true) {
                    currentPlayer = player1;
                    return currentPlayer;
                }
            })
            
        };
    }

    myBoard.winCon = function() {
        var obj0 = gameBoard.find(obj => obj.id == 0);
        var obj1 = gameBoard.find(obj => obj.id == 1);
        var obj2 = gameBoard.find(obj => obj.id == 2);
        var obj3 = gameBoard.find(obj => obj.id == 3);
        var obj4 = gameBoard.find(obj => obj.id == 4);
        var obj5 = gameBoard.find(obj => obj.id == 5);
        var obj6 = gameBoard.find(obj => obj.id == 6);
        var obj7 = gameBoard.find(obj => obj.id == 7);
        var obj8 = gameBoard.find(obj => obj.id == 8);

        cell = document.getElementById('board');       
        winText = document.getElementById('win');

        cell.addEventListener('click', () =>{


            if (obj0['b'] == 'X' && obj1['b'] == 'X' && obj2['b'] == 'X') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj3['b'] == 'X' && obj4['b'] == 'X' && obj5['b'] == 'X') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj6['b'] == 'X' && obj7['b'] == 'X' && obj8['b'] == 'X') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj0['b'] == 'X' && obj4['b'] == 'X' && obj8['b'] == 'X') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj2['b'] == 'X' && obj4['b'] == 'X' && obj6['b'] == 'X') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj0['b'] == 'X' && obj3['b'] == 'X' && obj6['b'] == 'X') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj1['b'] == 'X' && obj4['b'] == 'X' && obj7['b'] == 'X') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj2['b'] == 'X' && obj5['b'] == 'X' && obj8['b'] == 'X') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj0['b'] == 'O' && obj1['b'] == 'O' && obj2['b'] == 'O') {
                winText.innerHTML = ('Player O Wins!');
            } else if (obj3['b'] == 'O' && obj4['b'] == 'O' && obj5['b'] == 'O') {
                winText.innerHTML = ('Player O Wins!');
            } else if (obj6['b'] == 'O' && obj7['b'] == 'O' && obj8['b'] == 'O') {
                winText.innerHTML = ('Player O Wins!');
            } else if (obj0['b'] == 'O' && obj4['b'] == 'O' && obj8['b'] == 'O') {
                winText.innerHTML = ('Player O Wins!');
            } else if (obj2['b'] == 'O' && obj4['b'] == 'O' && obj6['b'] == 'O') {
                winText.innerHTML = ('Player X Wins!');
            } else if (obj0['b'] == 'O' && obj3['b'] == 'O' && obj6['b'] == 'O') {
                winText.innerHTML = ('Player O Wins!');
            } else if (obj1['b'] == 'O' && obj4['b'] == 'O' && obj7['b'] == 'O') {
                winText.innerHTML = ('Player O Wins!');
            } else if (obj2['b'] == 'O' && obj5['b'] == 'O' && obj8['b'] == 'O') {
                winText.innerHTML = ('Player O Wins!');
            }
        })

        reset = document.getElementById('reset');

        reset.addEventListener('click', () =>{
           window.location.reload(); 
        })
    }

    
    return myBoard;
})();


Board.addCard();
Board.winCon();

};