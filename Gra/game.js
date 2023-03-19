const fieldsElements = document.querySelectorAll(".board__item");
const button = document.getElementById("reset")
const gamemode = document.getElementById("gamemode")


let fields = ["","","","","","","","",""]
const names = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"]

let gameactive = true;
var timer = 0;
let activePlayer = "X";
let AI = false;


const winningconditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]




function validateGame(){
    for (let i = 0;  i<=7; i++){
        const [posA, posB, posC] = winningconditions[i];
        if (fields[posA] !== "" &&  fields[posA] === fields[posB] && fields[posA] === fields[posC]){
            if(AI){
                document.getElementById("turn").innerHTML = (activePlayer === "X" ? "Wygrał Gracz" : " Wygrał Komputer");
            }
            else{
                document.getElementById("turn").innerHTML = "Wygrał Gracz " + (activePlayer === "X" ? "1" : "2");
            }
            gameactive = false
        }
    }

    if (gameactive === true && timer===8){
        document.getElementById("turn").innerHTML = "Gra zakonczona remisem";
        gameactive = false
    }
}

function res(){
    fields = ["","","","","","","","",""]
    activePlayer = "X";
    gameactive = true;
    for (let i = 0;  i<=8; i++){
        document.getElementById(names[i]).src = "";
    }
    document.getElementById("turn").innerHTML = "Tura Gracza 1";
    timer = 0;
}


fieldsElements.forEach(field =>{
    
    field.addEventListener("click", e=>{
        if(gameactive){
            const {pos} = e.target.dataset;
            if(fields[pos]===""){
                if(AI){
                    fields[pos] = activePlayer;
                    document.getElementById(names[pos]).src = "close.svg";
                    validateGame();
                    activePlayer = activePlayer === "X" ? "O" : "X";
                    timer++;
                    
                    if(gameactive){
                        let wygrana = -1
                        let blok = -1

                        for (let i = 0;  i<=7; i++){
                            const [posA, posB, posC] = winningconditions[i];
                            if (fields[posA] == "X" &&  fields[posB] == "X" &&  fields[posC] == ""){
                                blok = posC
                            }
                            if (fields[posA] == "X" &&  fields[posB] == "" &&  fields[posC] == "X"){
                                blok = posB
                            }
                            if (fields[posA] == "" &&  fields[posB] == "X" &&  fields[posC] == "X"){
                                blok = posA
                            }
                            if (fields[posA] == "O" &&  fields[posB] == "O" &&  fields[posC] == ""){
                                wygrana = posC
                            }
                            if (fields[posA] == "O" &&  fields[posB] == "" &&  fields[posC] == "O"){
                                wygrana = posB
                            }
                            if (fields[posA] == "" &&  fields[posB] == "O" &&  fields[posC] == "O"){
                                wygrana = posA
                            }
                        }
                        
                        if(wygrana != -1){
                            fields[wygrana] = activePlayer;
                            document.getElementById(names[wygrana]).src = "radio-button-off.svg";
                        }
                        else if(blok!=-1){
                            fields[blok] = activePlayer;
                            document.getElementById(names[blok]).src = "radio-button-off.svg";
                        }
                        else{
                            const emptyIndexes = [];
                            let idx = fields.indexOf("");
                            while (idx !== -1) {
                                emptyIndexes.push(idx);
                                idx = fields.indexOf("", idx + 1);
                            }
                        const randomPositionIndex = Math.floor(Math.random() * emptyIndexes.length);
                        fields[emptyIndexes[randomPositionIndex]] = activePlayer;
                        document.getElementById(names[emptyIndexes[randomPositionIndex]]).src = "radio-button-off.svg";
                        }
                        
                        validateGame();
                        activePlayer = activePlayer === "X" ? "O" : "X";
                        timer++;
                    }
                    
                }
                else{
                    fields[pos] = activePlayer;
                    if(activePlayer==="X"){
                        document.getElementById(names[pos]).src = "close.svg";
                        document.getElementById("turn").innerHTML = "Tura Gracza 2";
                    }
                    else{
                        document.getElementById(names[pos]).src = "radio-button-off.svg";
                        document.getElementById("turn").innerHTML = "Tura Gracza 1";
                    }
                    validateGame();
                    activePlayer = activePlayer === "X" ? "O" : "X";
                    timer++;
                }  
                
            }
        }
    });
});



button.addEventListener("click", e=>{
    res();
});


gamemode.addEventListener("click", e=>{
    
    if(AI){
        AI = false
        document.getElementById("tryb").innerHTML = "Tryb dla dwóch graczy";
        gamemode.innerText  = "1 Player"
        res();
    }
    else{
        AI = true
        document.getElementById("tryb").innerHTML = "Tryb dla jednego gracza";
        gamemode.innerText  = "2 Players"
        res();
    }
});