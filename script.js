let gridElements=document.getElementsByClassName("square")
let turn="X"
let gameOver=false
let Arr=[
    "0","1","2",
    "3","4","5",
    "6","7","8"
]
for(const element of gridElements){
    element.addEventListener("click",function(){
        if (gameOver){
            return
        }   
        let value=element.getAttribute("value")
        let index=value-1
        if(Arr[index]=="X" || Arr[index]=="O")
        {
            return
        }
        let squareContent=document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML=turn
        Arr[index]=turn
        
        isWinner()
        if(turn=="X")
            {
                turn="O"
            }else
            {
                turn="X"
            }
            document.getElementById("instruction").textContent=`It is ${turn} turn`
    })

    function isWinner(){
        if(
            (Arr[0]==Arr[1] && Arr[1]==Arr[2])||
            (Arr[3]==Arr[4] && Arr[4]==Arr[5])||
            (Arr[6]==Arr[7] && Arr[7]==Arr[8])||

            (Arr[0]==Arr[3] && Arr[3]==Arr[6])||
            (Arr[1]==Arr[4] && Arr[4]==Arr[7])||
            (Arr[2]==Arr[5] && Arr[5]==Arr[8])||
        
            (Arr[0]==Arr[4] && Arr[4]==Arr[8])||
            (Arr[2]==Arr[4] && Arr[4]==Arr[6])
        )
        {
            var winner=turn=="O"?"O":"X"
            gameOver=true
            alertify.alert(`${winner} Won!`)
            return
           
        }
        var isDraw=true
        for(square of Arr)
        {
            if(square!="X"&& square!="O")
            {
                isDraw=false
            }
        }

        if(isDraw)
        {
            gameOver=true
            alertify.alert("Draw!")
        }
    }
}

document.getElementById("reset-btn").addEventListener("click",function(){
    reset()
})

function reset(){
    for(element of gridElements)
    {
        let value=element.getAttribute("value")
        let squareContent=document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML=""
        Arr=[
            "0","1","2",
            "3","4","5",
            "6","7","8"]
        
    }
    gameOver=false
    turn="X"
    document.getElementById("instruction").textContent=`It is ${turn} turn`

}