import React from "react";
import './App.css'

export function ChangeValue(value , what) {
    const box = document.getElementsByClassName("box");
    if(value > 1000){
        value = 1000;
    }
    if(what == 1){
        box[0].style.width = value+"px";
    }
    else if(what == 2){
        box[0].style.height = value+"px";
    }
}