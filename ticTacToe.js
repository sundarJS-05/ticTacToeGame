
console.log('welcome to Tic Tc Toe')

let turn = 'X'

let gameOver = false

// if turn is currently of 'x' ; change to '0' for next turn
let changeTurn = ()=>{
    return turn=="X"?"0":"X"
}

// function to check win
let checkWin = ()=>{
    let boxtexts=document.querySelectorAll('.boxtext')

    let wins = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]

    wins.forEach( (x)=>{
        if( (boxtexts[x[0]].innerText==boxtexts[x[1]].innerText)
        && (boxtexts[x[1]].innerText==boxtexts[x[2]].innerText)
        && (boxtexts[x[0]].innerText!='') ){

            gameOver=true
            document.querySelector('.info').innerText = `${boxtexts[x[0]]} won`

        }
       }
   )

}

// Game logic

// select all boxes
let boxes = document.querySelectorAll('.box')

// convert selected boxes to Array
let boxArray = Array.from(boxes)

boxArray.forEach( (element)=>{
    let boxText = element.querySelector('.boxtext')

    element.addEventListener( 'click', (event)=>{

        if(boxText.innerText==''){
            boxText.innerText=turn
            turn=changeTurn()

            checkWin()

            if(!gameOver){
            document.querySelector('.info').innerText=`Turn for ${turn}`
            }
        }

    })
})

// adding onclick listener to reset button

let reset = document.querySelector('#reset')

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext')
    let boxArray = Array.from(boxtexts)

    boxArray.forEach( (elem)=>{
        elem.innerText=''

    })

    turn='X'
    document.querySelector('.info').innerText=`Turn for ${turn}`


} )

