import {snakeBody} from './snake.js'
import {onSnake, expandSnake} from './snake.js'
import {incrementScore} from './game.js'

let food = getRandomFoodPosition()
const expansionRate = 1

export function update(){
    if(onSnake(food)){
        expandSnake(expansionRate)
        incrementScore()
        food = getRandomFoodPosition()
    }
}
export function draw(gameArea){

        const foodElement = document.createElement('div')
        foodElement.setAttribute('class', 'food')
        foodElement.style.gridRowStart = food.x 
        foodElement.style.gridColumnStart = food.y
        gameArea.appendChild(foodElement)
    
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition==null || onSnake(newFoodPosition)){
        newFoodPosition = {
            x:Math.floor(Math.random()*40 + 1),
            y:Math.floor(Math.random()*40 + 1)
        }
    }
    return newFoodPosition
}

