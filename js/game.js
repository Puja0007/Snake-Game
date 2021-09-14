import {update as updateSanke, draw as drawSnake, snakeSpeed, snakeBody} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js'

let lastRenderTime = 0
let gameOver = false
const gameArea = document.getElementById('game-area')
let score = 0

export function incrementScore(){
    score += 2
}

function main(currentTime){
    if(gameOver)return
    window.requestAnimationFrame(main)
    const duration = (currentTime - lastRenderTime)/1000
    if (duration<1/snakeSpeed) return 
    
    lastRenderTime = currentTime

    update()
    draw()
    checkGameOver()
}

function update(){
    if(gameOver)return
    updateSanke()
    updateFood()
}

function draw(){
    if(gameOver)return
    gameArea.innerHTML = ''
    drawSnake(gameArea)
    drawFood(gameArea)
}

function checkGameOver(){
    if(outofGrid()||snakeBitItself()){
        alert(`Game Over ! Your point : ${score}`)
        gameOver = true
        window.location.reload();
    }
    
}

function outofGrid(){
    
    let sneakeHead = {x:snakeBody[0].x, y:snakeBody[0].y}

    if (sneakeHead.x<1 || sneakeHead.x>40 || sneakeHead.y<1 || sneakeHead.y>40){
        console.log('outofgrid')
        return true
    }
        
    else
        return false
}

function snakeBitItself(){
    let sneakeHead = {x:snakeBody[0].x, y:snakeBody[0].y}
    for (let i=1; i<snakeBody.length; i++){
        if(sneakeHead.x==snakeBody[i].x && sneakeHead.y==snakeBody[i].y){
            console.log('snake bytes itself')
            return true
        }
    }
    return false
}

if(!gameOver)
window.requestAnimationFrame(main)
