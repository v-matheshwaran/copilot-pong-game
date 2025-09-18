# Simple Pong Game

A classic Pong game built using **HTML**, **CSS**, and **JavaScript**. The left paddle is controlled by your mouse, while the right paddle is managed by a simple AI. The game features a bouncing ball, paddle and wall collision detection, and score tracking.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [How the Game Works](#how-the-game-works)
- [Code Structure](#code-structure)
- [Customization](#customization)
- [License](#license)

---

## Demo

![Screenshot of Pong Game](./demo-screenshot.png)

> **Tip**: Open `index.html` in your browser to play immediately.

---

## Features

- **Mouse-controlled left paddle** (player).
- **AI-controlled right paddle**.
- **Real-time ball movement** with realistic bouncing physics.
- **Collision detection** for paddles and walls.
- **Score display** for both player and AI.
- **Simple, responsive UI**.

---

## How to Play

**Goal**: Prevent the ball from passing your paddle on the left side. Score points when the ball passes the AI paddle on the right.

### Controls

- **Left Paddle**: Move your mouse vertically within the game canvas to control the paddle's position.
- **Right Paddle (AI)**: Automatically follows the ball.

### Rules

1. The ball bounces off the top and bottom walls.
2. If the ball hits a paddle, it bounces back with a slight change in angle depending on where it hits.
3. If the ball passes your paddle (left side), the AI scores a point.
4. If the ball passes the AI paddle (right side), you score a point.
5. The game continues indefinitely; refresh the page to reset scores.

---

## Installation

1. **Clone or Download the Repository**

    ```bash
    git clone https://github.com/v-matheshwaran/copilot-pong-game.git
    ```

2. **Open the Game**

   - Open `index.html` directly in your web browser.
   - No build tools or server required.

---

## How the Game Works

- The **game uses a canvas** for rendering paddles, ball, and scores.
- **Paddle movement**:
    - The left paddle's vertical position is set by your mouse within the canvas.
    - The right paddle tracks the ball with a delay to simulate basic AI.
- **Ball movement**:
    - The ball has velocity and direction, bouncing off walls and paddles.
    - When the ball hits a paddle, its direction and angle adjust slightly depending on the hit location.
- **Scoring**:
    - Points are awarded when the ball passes a paddle.

---

## Code Structure

| File         | Purpose                                               |
|--------------|------------------------------------------------------|
| `index.html` | Main HTML file; includes canvas and script references |
| `style.css`  | Styles for the game layout and canvas                 |
| `script.js`  | Game logic, rendering, controls, and physics          |

#### Example File Inclusion

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

---

## Customization

- **Change Paddle or Ball Size:**  
  Edit the variables at the top of `script.js` (e.g., `paddleWidth`, `paddleHeight`, `ballSize`).
- **Adjust AI Difficulty:**  
  Modify the AI movement speed or logic in the `update()` function in `script.js`.
- **Canvas Size:**  
  Change the `width` and `height` attributes of the `<canvas>` in `index.html`.

---

## License

This project is provided for educational purposes. Feel free to modify, use, and share!

---

### Credits

Built by Copilot and requested by [v-matheshwaran](https://github.com/v-matheshwaran)
