import React from "react";
import "../App.css";
import { Route, BrowserRouter } from "react-router-dom";
import { LoginContainer } from "containers/LoginContainer";
import { MainComponent } from "components/MainComponent";

function App() {
  if (window.location.href === "http://localhost:3000/") {
    window.location.href = "http://localhost:3000/main";
  }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/login" component={LoginContainer} />
      <Route path="/main" component={MainComponent} />
    </BrowserRouter>
  );
}

export default App;
