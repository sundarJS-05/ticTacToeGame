
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

        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7], [2,5,8],[0,4,8],[2,4,6]

    ]

    wins.forEach( (win)=>{
        if( (boxtexts[win[0]].innerText==boxtexts[win[1]].innerText)
        && (boxtexts[win[1]].innerText==boxtexts[win[2]].innerText)
        && (boxtexts[win[0]].innerText!='') ){

            gameOver=true
            document.querySelector('.info').innerText = boxtexts[win[0]].innerText + 'won'

        }
       }
   )

}


// Game logic

// select all boxes
let boxes = document.querySelectorAll('.box')

// convert selected boxes to Array
let boxArray = Array.from(boxes) 

boxArray.forEach( (box)=>{
    let boxText = box.querySelector('.boxtext')

    // add click event listener to each box
    box.addEventListener( 'click', ()=>{

        // if box is blank; give turn to X; then change turn
        if(boxText.innerText==''){
            boxText.innerText=turn
            turn=changeTurn()

            // check if X or 0 won
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

    boxArray.forEach( (bText)=>{
        bText.innerText=''

    })

    turn='X'
    gameOver=false
    document.querySelector('.info').innerText=`Turn for ${turn}`


} )

