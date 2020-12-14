import React from "react";
import "../App.css";
import { LoginContainer } from "containers/LoginContainer";
import { MainComponent } from "components/MainComponent";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector(state => state.userState);
  return (
    <div>
      {state.userState === "deActivation" ? (
        <LoginContainer />
      ) : (
        <MainComponent />
      )}
    </div>
  );
}

export default App;
