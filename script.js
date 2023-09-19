let board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
];

let currentPlayer = 'X';

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
});

/* function handleCellClick(event) {
    const cell = event.target;
    const row = parseInt(cell.getAttribute('data-row'));
    const col = parseInt(cell.getAttribute('data-col'));

    if (board[row][col] === '_') {
        board[row][col] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner(board, currentPlayer)) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            return;
        }
        if (checkDraw(board)) {
            setTimeout(() => alert("It's a draw!"), 100);
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            const [bestRow, bestCol] = findBestMove(board);
            board[bestRow][bestCol] = 'O';
            document.querySelector(`[data-row='${bestRow}'][data-col='${bestCol}']`).textContent = 'O';
            if (checkWinner(board, 'O')) {
                setTimeout(() => alert("O wins!"), 100);
            }
            currentPlayer = 'X';
        }
    }
} */
function handleCellClick(event) {
    const cell = event.target;
    const row = parseInt(cell.getAttribute('data-row'));
    const col = parseInt(cell.getAttribute('data-col'));

    if (board[row][col] === '_') {
        board[row][col] = currentPlayer;
        cell.textContent = currentPlayer;
        if (checkWinner(board, currentPlayer)) {
            setTimeout(() => {
                alert(`${currentPlayer} wins!`);
                if (confirm("Do you want to play another game?")) {
                    resetGame();
                }
            }, 100);
            return;
        }
        if (checkDraw(board)) {
            setTimeout(() => {
                alert("It's a draw!");
                if (confirm("Do you want to play another game?")) {
                    resetGame();
                }
            }, 100);
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            const [bestRow, bestCol] = findBestMove(board);
            board[bestRow][bestCol] = 'O';
            document.querySelector(`[data-row='${bestRow}'][data-col='${bestCol}']`).textContent = 'O';
            if (checkWinner(board, 'O')) {
                setTimeout(() => {
                    alert("O wins!");
                    if (confirm("Do you want to play another game?")) {
                        resetGame();
                    }
                }, 100);
            }
            currentPlayer = 'X';
        }
    }
}


function checkWinner(board, player) {
    return (
        // Check rows
        board.some(row => row.every(cell => cell === player)) ||
        // Check columns
        [0, 1, 2].some(col => board.every(row => row[col] === player)) ||
        // Check diagonals
        [0, 1, 2].every(i => board[i][i] === player) ||
        [0, 1, 2].every(i => board[i][2 - i] === player)
    );
}

function checkDraw(board) {
    return board.every(row => row.every(cell => cell !== '_'));
}

function minimax(board, depth, isMaximizing, alpha, beta) {
    const scores = { X: -1, O: 1, draw: 0 };

    if (checkWinner(board, 'O')) {
        return scores['O'];
    }
    if (checkWinner(board, 'X')) {
        return scores['X'];
    }
    if (checkDraw(board)) {
        return scores['draw'];
    }

    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '_') {
                    board[i][j] = 'O';
                    let eval = minimax(board, depth + 1, false, alpha, beta);
                    board[i][j] = '_';
                    maxEval = Math.max(maxEval, eval);
                    alpha = Math.max(alpha, eval);
                    if (beta <= alpha) {
                        break;
                    }
                }
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '_') {
                    board[i][j] = 'X';
                    let eval = minimax(board, depth + 1, true, alpha, beta);
                    board[i][j] = '_';
                    minEval = Math.min(minEval, eval);
                    beta = Math.min(beta, eval);
                    if (beta <= alpha) {
                        break;
                    }
                }
            }
        }
        return minEval;
    }
}

function findBestMove(board) {
    let bestMove;
    let bestValue = -Infinity;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '_') {
                board[i][j] = 'O';
                let moveValue = minimax(board, 0, false, -Infinity, Infinity);
                board[i][j] = '_';
                if (moveValue > bestValue) {
                    bestValue = moveValue;
                    bestMove = [i, j];
                }
            }
        }
    }
    return bestMove;
}

function resetGame() {
    board = [
        ['_', '_', '_'],
        ['_', '_', '_'],
        ['_', '_', '_']
    ];
    currentPlayer = 'X';
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });
}