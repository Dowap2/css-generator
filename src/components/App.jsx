import React from "react";
import "../App.css";
import { Route } from "react-router-dom";
import { LoginContainer } from "containers/LoginContainer";
import { MainComponent } from "components/MainComponent";
import { HeaderComponent } from "components/HeaderComponent";

function App() {
  if (window.location.href === "http://localhost:3000/") {
    window.location.href = "http://localhost:3000/main";
  }
  return (
    <div>
      {/*<HeaderComponent />*/}
      <Route exact path="/login" component={LoginContainer} />
      <Route path="/main" component={MainComponent} />
    </div>
  );
}

export default App;
