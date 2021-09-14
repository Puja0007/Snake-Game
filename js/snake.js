import { getDirection} from "./input.js";

export const snakeSpeed = 2;
let snakeLengthSegment= 0

export const snakeBody = [
    {
        x: Math.floor(Math.random()*40 +1),
         y:Math.floor(Math.random()*40 +1)
        }
]

export function update(){
    addSegments()
    for(let i=snakeBody.length - 2;i>=0;i--){
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += getDirection().x
    snakeBody[0].y += getDirection().y  
}

export function draw(gameArea){
    
    snakeBody.forEach(data=>{
        const snakeElement = document.createElement('div')
        snakeElement.setAttribute('class', 'snake')
        snakeElement.style.gridRowStart = data.x 
        snakeElement.style.gridColumnStart = data.y
        gameArea.appendChild(snakeElement)
    })
}

export function expandSnake(amount) {
    snakeLengthSegment += amount
}

export function onSnake(position){
    return snakeBody.some(part=>{
        return part.x===position.x && part.y===position.y
    })
}

function addSegments(){
    for(let i=0; i<snakeLengthSegment;i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    snakeLengthSegment = 0
}