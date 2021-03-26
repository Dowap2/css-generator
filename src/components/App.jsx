import React, { useState } from "react";
import "../App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { LoginContainer } from "containers/LoginContainer";
import { MainComponent } from "components/MainComponent";
import { SketchPicker } from "react-color";

function App() {
  // if (window.location.href === "http://localhost:3000/") {
  //   window.location.href = "http://localhost:3000/main";
  // }
  const [color, setColor] = useState("#ffffff");
  return (
    <BrowserRouter>
      <SketchPicker color={color} onChangeComplete={setColor} />
      <Route exact path="/login" component={LoginContainer} />
      <Route path="" component={MainComponent} />
    </BrowserRouter>
  );
}

export default App;
