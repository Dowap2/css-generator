import React from "react";
import "../App.css";
import { Route } from "react-router-dom";
import { LoginContainer } from "containers/LoginContainer";
import { MainComponent } from "components/MainComponent";
import { HeaderComponent } from "components/HeaderComponent";

function App() {
  return (
    <div>
      <button onClick={e => console.log(window.location.href)}></button>
      <HeaderComponent />
      <Route exact path="/login" component={LoginContainer} />
      <Route path="/main" component={MainComponent} />
    </div>
  );
}

export default App;
