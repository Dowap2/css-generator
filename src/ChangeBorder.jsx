import React from "react";
import './App.css'
import { number } from "prop-types";

export function ChangeBorder(value) {
    const box = document.getElementsByClassName("box");
    let type = value;
    type = Number(type);
    if(value>100){
        value = 100;
    }
    if(isNaN(type)){
        box[0].style.borderStyle = value;
    }
    else{
        box[0].style.borderWidth = value+"px";
    }
}