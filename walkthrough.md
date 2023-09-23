
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

The Minimax algorithm is a recursive function that simulates all possible moves for both players and chooses the optimal move for the computer. It returns a score for each move: positive if beneficial for the computer, negative if beneficial for the human, and zero for a draw.

## Testing

After implementation, it's essential to test the game by playing multiple rounds. Ensure the computer plays optimally and that the game correctly identifies wins, losses, and draws.

## References

- [Minimax Algorithm in Game Theory | Set 3 (Tic-Tac-Toe AI – Finding optimal move)](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/)
- [Tic-tac-toe | Wikipedia](https://en.wikipedia.org/wiki/Tic-tac-toe)

