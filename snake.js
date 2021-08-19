var lastTime = 0;
const speedOfSnake = 3;
const gameBoard = document.getElementById('game-board');
let inputDiretion = {x: 0,y: 0};
let  score = 0;
let a = 2;
let b = 19;

let snakeBody = [
    { x: 10, y: 11}
    
]
const food = { x: 13, y: 15};
function main(currentTime){
    window.requestAnimationFrame(main);
    const gapOfRepetition = (currentTime - lastTime) / 1000;
    if(gapOfRepetition < 1 / speedOfSnake) {
        return;
    }
    lastTime=currentTime;
    DrawSnake();
}

window.requestAnimationFrame(main);

function isCollide(arr){
    for (let i = 1; i < snakeBody.length; i++) {
        if(arr[i].x === arr[0].x && arr[i].y === arr[0].y){
            return true;
        }
        else{
          return false; 
        }
    }
    return (snakeBody[0].y>=21 || snakeBody[0].y<=0 || snakeBody[0].x>=21 || snakeBody[0].x<=0)
    
    
}
function DrawSnake(){
    
    if(isCollide(snakeBody)){
        inputDiretion = {x: 0,y: 0};
        alert('Game over');
        snakeBody = [{x:10,y:11}];
    }
    
    
    else if(snakeBody[0].x === food.x && snakeBody[0].y === food.y){
        snakeBody.push({x: snakeBody[0].x + inputDiretion.x,y: snakeBody[0].y + inputDiretion.y});
        food.x = Math.round(a+(b-a)*Math.random());
        food.y = Math.round(a+(b-a)*Math.random());
    }
for(let i = snakeBody.length-2; i>=0; i--){
    snakeBody[i+1] = {...snakeBody[i]};
}
snakeBody[0].x += inputDiretion.x;
snakeBody[0].y += inputDiretion.y;
document.getElementById('game-board').innerHTML = "";
snakeBody.forEach((elememt,index)=>{
head = document.createElement('div');
head.style.gridRowStart = elememt.x;
head.style.gridColumnStart = elememt.y;
head.classList.add('snake');
document.getElementById('game-board').appendChild(head);
})
foodElement = document.createElement('div');
foodElement.style.gridRowStart = food.x;
foodElement.style.gridColumnStart = food.y;
foodElement.classList.add('food');
document.getElementById('game-board').appendChild(foodElement);

}
 
window.addEventListener('keydown', checkKey)
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        inputDiretion ={x:-1,y:0}
       
    }
    else if (e.keyCode == '40') {
        inputDiretion ={x:1,y:0}
        
    }
    else if (e.keyCode == '37') {
        inputDiretion ={x:0,y:-1};
       
    }
    else if (e.keyCode == '39') {
        inputDiretion ={x:0,y:1}
       
    }

}
