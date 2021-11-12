console.log("welcome to tic tac toe")
let turn = "X"
let over = false;

//function for turn
changeturn = () =>{
    return turn === "X"? "0": "X";
    
    // document.getElementsByTagName("p").innerText= "Turn = 0"
}

//game
let bxs = document.getElementsByClassName("box");
Array.from(bxs).forEach(element =>{
    
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", () =>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
           turn= changeturn();
           checkwin();
        if(!over){
           document.getElementsByClassName("tur")[0].innerText = "Turn ="+turn;
        } 
        
             
    }
    })
})

    
//reset
reset.addEventListener("click",() =>{
    let boxtxt = document.querySelectorAll ('.boxtext');
    Array.from(boxtxt).forEach(element =>{
        element.innerText = ""
    });
})

//win
const checkwin = () =>{
let boxtext =document.getElementsByClassName("boxtext");
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
win.forEach(e =>{

if((boxtext[e[1]].innerText==boxtext[e[0]].innerText) && (boxtext[e[1]].innerText==boxtext[e[2]].innerText) && (boxtext[e[0]].innerText != "")){
    document.querySelector(".tur").innerText = boxtext[e[0]].innerText+" won";
    
     over = true;
     

}
})
}