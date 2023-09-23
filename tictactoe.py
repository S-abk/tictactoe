import copy

# Define the initial state of the board
initial_board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
]

# Function to print the current state of the board
def print_board(board):
    for row in board:
        print(' '.join(row))
    print()

# Function to check if a player has won
def check_winner(board, player):
    # Check rows, columns, and diagonals
    return any(
        all(cell == player for cell in row) for row in board
    ) or any(
        all(row[i] == player for row in board) for i in range(3)
    ) or all(
        board[i][i] == player for i in range(3)
    ) or all(
        board[i][2 - i] == player for i in range(3)
    )

# Function to check if the board is full (draw)
def check_draw(board):
    return all(all(cell != '_' for cell in row) for row in board)

# Minimax function to find the best move
def minimax(board, depth, is_maximizing, alpha, beta):
    if check_winner(board, 'X'):
        return -1
    if check_winner(board, 'O'):
        return 1
    if check_draw(board):
        return 0

    if is_maximizing:
        max_eval = float('-inf')
        for i in range(3):
            for j in range(3):
                if board[i][j] == '_':
                    board[i][j] = 'O'
                    eval = minimax(board, depth + 1, False, alpha, beta)
                    board[i][j] = '_'
                    max_eval = max(max_eval, eval)
                    alpha = max(alpha, eval)
                    if beta <= alpha:
                        break
        return max_eval
    else:
        min_eval = float('inf')
        for i in range(3):
            for j in range(3):
                if board[i][j] == '_':
                    board[i][j] = 'X'
                    eval = minimax(board, depth + 1, True, alpha, beta)
                    board[i][j] = '_'
                    min_eval = min(min_eval, eval)
                    beta = min(beta, eval)
                    if beta <= alpha:
                        break
        return min_eval

# Function to find the best move for the computer
def find_best_move(board):
    best_move = None
    best_value = float('-inf')
    for i in range(3):
        for j in range(3):
            if board[i][j] == '_':
                board[i][j] = 'O'
                move_value = minimax(board, 0, False, float('-inf'), float('inf'))
                board[i][j] = '_'
                if move_value > best_value:
                    best_move = (i, j)
                    best_value = move_value
    return best_move

# Main function to play the game
def play_game():
    while True:
        board = copy.deepcopy(initial_board)
        while True:
            print_board(board)
            if check_draw(board):
                print("It's a draw!")
                break
            if check_winner(board, 'O'):
                print("Player O wins!")
                break
            if check_winner(board, 'X'):
                print("Player X wins!")
                break

            # Player X's turn (human)
            row = int(input("Enter the row (0, 1, or 2): "))
            col = int(input("Enter the column (0, 1, or 2): "))
            if board[row][col] == '_':
                board[row][col] = 'X'
            else:
                print("Invalid move. Try again.")
                continue

            # Player O's turn (computer)
            if not check_winner(board, 'X') and not check_draw(board):
                move = find_best_move(board)
                if move:
                    board[move[0]][move[1]] = 'O'

        # Ask the user if they want a rematch
        rematch = input("Do you want a rematch? (yes/no): ").lower()
        if rematch != 'yes' and rematch != 'y':
            break

# Start the game
play_game()
