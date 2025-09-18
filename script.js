const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Game settings
const paddleWidth = 10, paddleHeight = 100;
const ballSize = 15;
const playerX = 20;
const aiX = canvas.width - paddleWidth - 20;
let playerY = (canvas.height - paddleHeight) / 2;
let aiY = (canvas.height - paddleHeight) / 2;

let ballX = canvas.width / 2 - ballSize / 2;
let ballY = canvas.height / 2 - ballSize / 2;
let ballSpeedX = 6 * (Math.random() > 0.5 ? 1 : -1);
let ballSpeedY = (Math.random() * 4 + 2) * (Math.random() > 0.5 ? 1 : -1);

let playerScore = 0, aiScore = 0;

// Mouse control for player paddle
canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    playerY = mouseY - paddleHeight / 2;
    playerY = Math.max(0, Math.min(canvas.height - paddleHeight, playerY));
});

// Main game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Update positions and collisions
function update() {
    // Ball movement
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Top/bottom wall collision
    if (ballY <= 0 || ballY + ballSize >= canvas.height) {
        ballSpeedY *= -1;
        ballY = Math.max(0, Math.min(canvas.height - ballSize, ballY));
    }

    // Left paddle collision
    if (
        ballX <= playerX + paddleWidth &&
        ballY + ballSize > playerY &&
        ballY < playerY + paddleHeight
    ) {
        ballSpeedX *= -1;
        // Add a little randomness to bounce angle
        ballSpeedY += ((ballY + ballSize / 2) - (playerY + paddleHeight / 2)) * 0.15;
        ballX = playerX + paddleWidth;
    }

    // Right paddle (AI) collision
    if (
        ballX + ballSize >= aiX &&
        ballY + ballSize > aiY &&
        ballY < aiY + paddleHeight
    ) {
        ballSpeedX *= -1;
        ballSpeedY += ((ballY + ballSize / 2) - (aiY + paddleHeight / 2)) * 0.15;
        ballX = aiX - ballSize;
    }

    // Left/right wall (score)
    if (ballX < 0) {
        aiScore++;
        resetBall(1);
    }
    if (ballX + ballSize > canvas.width) {
        playerScore++;
        resetBall(-1);
    }

    // Basic AI: Track the ball with some delay
    const aiCenter = aiY + paddleHeight / 2;
    if (aiCenter < ballY + ballSize / 2 - 20) {
        aiY += 6;
    } else if (aiCenter > ballY + ballSize / 2 + 20) {
        aiY -= 6;
    }
    aiY = Math.max(0, Math.min(canvas.height - paddleHeight, aiY));
}

// Draw everything
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw midline
    ctx.strokeStyle = '#888';
    ctx.beginPath();
    ctx.setLineDash([12, 12]);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw paddles
    ctx.fillStyle = '#fff';
    ctx.fillRect(playerX, playerY, paddleWidth, paddleHeight);
    ctx.fillRect(aiX, aiY, paddleWidth, paddleHeight);

    // Draw ball
    ctx.fillStyle = '#fd0';
    ctx.fillRect(ballX, ballY, ballSize, ballSize);

    // Draw scores
    ctx.font = '32px Arial';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.fillText(playerScore, canvas.width / 2 - 60, 50);
    ctx.fillText(aiScore, canvas.width / 2 + 60, 50);
}

// Reset ball to center after score
function resetBall(direction) {
    ballX = canvas.width / 2 - ballSize / 2;
    ballY = canvas.height / 2 - ballSize / 2;
    ballSpeedX = 6 * direction;
    ballSpeedY = (Math.random() * 4 + 2) * (Math.random() > 0.5 ? 1 : -1);
}

// Start game
gameLoop();