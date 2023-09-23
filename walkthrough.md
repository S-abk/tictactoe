https://github.com/S-abk/tictactoe
# Tic-Tac-Toe Game Walkthrough

Welcome to the Tic-Tac-Toe game where a human player competes against a computer. This documentation provides a detailed walkthrough of the game's design and implementation.

## Table of Contents

- [Introduction](#introduction)
- [Game Components](#game-components)
- [Implementation Details](#implementation-details)
  - [Board Representation](#board-representation)
  - [Displaying the Board](#displaying-the-board)
  - [Checking the Game State](#checking-the-game-state)
  - [Player Moves](#player-moves)
  - [Minimax Algorithm](#minimax-algorithm)
- [Testing](#testing)
- [References](#references)

## Introduction

Tic-Tac-Toe is a classic game where two players take turns marking spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Game Components

### Board

A 3x3 grid where players place their symbols ('X' or 'O').

### Players

Two players:
- Human (typically 'X')
- Computer ('O')

## Implementation Details

### Board Representation

The board is represented as a 2D list, where each cell can have three states: 'X', 'O', or '_'. The '_' represents an empty cell.

```python
initial_board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
]
```

### Displaying the Board

A simple function iterates over the board's rows and prints them, providing a visual representation of the current game state.

### Checking the Game State

Functions are implemented to check if there's a winner or if the board is full (a draw). The game checks all rows, columns, and both diagonals for three of the same symbols.

### Player Moves

- **Human**: The game prompts the user for row and column input.
- **Computer**: The game uses the Minimax algorithm to determine the best move.

### Minimax Algorithm

The Minimax algorithm is a decision-making algorithm used for finding the best move in games like Tic-Tac-Toe, Chess, and Go. The algorithm predicts the opponent's moves and chooses the most optimal move for the current player.

#### How It Works:

1. **Recursive Nature**: Minimax is a recursive algorithm that simulates all possible moves in the game for both players.
2. **Evaluation**: After reaching a terminal state (win, lose, or draw), the algorithm evaluates the board and assigns a score.
3. **Maximizing and Minimizing**: The algorithm tries to maximize the score when it's the computer's turn and minimize the score when it's the opponent's turn.

#### Baseline Minimax vs. Alpha-Beta Pruning:

- **Baseline Minimax**: This is the basic version of the algorithm. It explores all possible moves and all possible game states. While it's guaranteed to find the best move, it can be very slow for games with a large number of possible moves or deep search trees.

- **Alpha-Beta Pruning**: This is an optimization technique for the Minimax algorithm. It reduces the number of nodes evaluated in the search tree by pruning branches that don't need to be explored. The main idea is to maintain two values, alpha and beta, which represent the minimum score the maximizing player is assured of and the maximum score the minimizing player is assured of respectively.

#### Advantages of Alpha-Beta Pruning:

1. **Efficiency**: Alpha-beta pruning significantly reduces the number of nodes evaluated, making the algorithm faster.
2. **Depth**: With alpha-beta pruning, the algorithm can search deeper in the same amount of time, leading to better decision-making.
3. **Optimality**: Despite pruning parts of the search tree, alpha-beta pruning always produces the same move as the baseline Minimax algorithm.

#### Demonstration:

Consider a game where the search tree has a depth of 4. With baseline Minimax, the algorithm would evaluate every possible move at every depth. If there are an average of 10 possible moves at each level, the algorithm evaluates 10,000 nodes.

With alpha-beta pruning, the algorithm might only evaluate 5,000 nodes or even fewer, depending on the order in which nodes are evaluated and the values of alpha and beta at each step. This means alpha-beta pruning can be twice as fast (or even faster) than baseline Minimax.

#### Conclusion:

While the baseline Minimax algorithm is powerful and guarantees finding the best move, it can be slow for complex games. Alpha-beta pruning offers a significant optimization, allowing the algorithm to search deeper and make better decisions without sacrificing optimality.


## Testing

After implementation, it's essential to test the game by playing multiple rounds. Below are screenshots of output from running the python script and the web based version

![Capture](https://github.com/S-abk/tictactoe/assets/117982032/1015da56-25dd-4f77-b01f-3f210919d313)
![Capture_2](https://github.com/S-abk/tictactoe/assets/117982032/a77035de-7341-45f6-a0b5-210519a6b47d)
![Capture_1](https://github.com/S-abk/tictactoe/assets/117982032/a5079207-d253-45cf-a53d-99b9c54c8fcf)
![Capture_0](https://github.com/S-abk/tictactoe/assets/117982032/3adfdd32-340e-4505-83cb-33fc458b230b)

## References

- [Minimax Algorithm in Game Theory | Set 3 (Tic-Tac-Toe AI – Finding optimal move)](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/)
- [Tic-tac-toe | Wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe)

