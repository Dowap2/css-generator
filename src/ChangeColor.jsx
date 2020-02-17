import React from "react";
import './App.css'

export function ChangeColor(value , num) {
    const box = document.getElementsByClassName("box");
    if(num == 1){
        box[0].style.backgroundColor = value;
    }
    else if(num == 2){
        box[0].style.borderColor = value;
    }
}