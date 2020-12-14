import React from "react";

export function LoginComponent(props) {
  return (
    <div>
      <button onClick={e => props.userState("activation")}>login</button>
    </div>
  );
}
