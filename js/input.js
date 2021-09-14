const inputDirection = {x:0, y:1}
let prevInputDirection = ''

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const topBtn = document.getElementById('top')
const downBtn = document.getElementById('down')

function up(){
    if(prevInputDirection==='down')return
            inputDirection.x = -1
            inputDirection.y = 0
            prevInputDirection = 'up'
}

function down(){
    if(prevInputDirection==='up')return
            inputDirection.x = 1
            inputDirection.y = 0
            prevInputDirection = 'down'
}

function left(){
    if(prevInputDirection==='right')return
            inputDirection.x = 0
            inputDirection.y = -1
            prevInputDirection = 'left'
}

function right(){
    if(prevInputDirection==='left')return
            inputDirection.x = 0
            inputDirection.y = 1
            prevInputDirection = 'right'
}

window.addEventListener('keydown', e=>{
    if(e.key ==='ArrowUp'){
        up()
    }
        else if(e.key === 'ArrowDown'){
            down()
        }
        else if(e.key ===  'ArrowLeft'){
            left()
        }
        else if (e.key ===  'ArrowRight'){
            right()
        }
 
    })

leftBtn.addEventListener('click',left)
rightBtn.addEventListener('click', right)
topBtn.addEventListener('click',up)
downBtn.addEventListener('click', down)


export function getDirection(){
    return {...inputDirection}
}
