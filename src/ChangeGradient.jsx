import React from "react";
import './App.css'
let i = 0;
let j = 0;
const color = [[],[]];
let direction = "to top";
color[0][0]="#000000";
color[1][0]="#000000";
let check = 0;

export function ChangeGradient(value , num) {
    const box = document.getElementsByClassName("box");
    
    if(num == 0){
        i++;
        color[0][i] = value;
    }
    else if(num == 1){
        j++;
        color[1][j] = value;
    }
    else if(num == 3){
        direction = value;
    }
    else if(num == 4 && check%2 == 0){
        box[0].style.backgroundImage="linear-gradient("+direction+","+color[0][i]+","+color[1][j]+")"
        check++;
    }
    else if(num == 4 && check%2 == 1){
        box[0].style.backgroundImage="none"
        check++;
    }
    if(num == 0 || num == 1 || num == 3){
        box[0].style.backgroundImage="linear-gradient("+direction+","+color[0][i]+","+color[1][j]+")"
    }
    console.log(check);
}
