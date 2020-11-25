import React from "react";
import "../App.css";
import { BoxWidthContainer } from "containers/BoxWidthContainer";
import { BoxHeightContainer } from "containers/BoxHeightContainer";
import { BoxBorderWidthContainer } from "containers/BoxBorderWidthContainer";
import { BoxBorderStyleContainer } from "containers/BoxBorderStyleContainer";
import { BoxBorderColorContainer } from "containers/BoxBorderColorContainer";
import { BoxColorContainer } from "containers/BoxColorContainer";
import { BoxGradientComponent } from "containers/BoxGradientComponent";
import { BoxTransformContainer } from "containers/BoxTransformContainer";
import { BoxRotateContainer } from "containers/BoxRotateContainer";
import { BoxTextContainer } from "containers/BoxTextContainer";
import { BoxTextModalContainer } from "containers/BoxTextModalContainer";
import { ModalContainer } from "containers/ModalContainer";
import { BoxColorTypeContainer } from "containers/BoxColorTypeContainer";
import { AddAnimationContainer } from "containers/addAnimationContainer";
import { useSelector } from "react-redux";
import { PreviewBox } from "containers/PreviewBox";

function App() {
  const colorType = useSelector(state => state.boxState.colorType) || "color";

  return (
    <div className="App">
      <ModalContainer />
      <div className="Side-bar-left">
        <menu className="menu-left">
          <li className="menu-left-first">
            length
            <ul className="menu-left-first-submenu">
              <BoxWidthContainer />
              <BoxHeightContainer />
            </ul>
          </li>

          <li className="menu-left-second">
            border
            <ul className="menu-left-second-submenu">
              <BoxBorderWidthContainer />
              <BoxBorderStyleContainer />
              <BoxBorderColorContainer />
            </ul>
          </li>
          <li className="menu-left-third">
            color
            <ul className="menu-left-third-submenu">
              <BoxColorTypeContainer />
              {colorType === "color" && <BoxColorContainer />}
              {colorType === "gradient" && <BoxGradientComponent />}
            </ul>
          </li>
        </menu>
      </div>

      <div className="Drawing-paper">
        <AddAnimationContainer />
        <PreviewBox />
      </div>

      <div className="Side-bar-right">
        <menu className="menu-right">
          <li className="menu-right-first">
            transform
            <ul className="menu-right-first-submenu">
              <BoxTransformContainer />
            </ul>
          </li>
          <li className="menu-right-second">
            rotate
            <ul className="menu-right-second-submenu">
              <BoxRotateContainer />
            </ul>
          </li>
          <li className="menu-right-third">
            text
            <ul className="menu-right-third-submenu">
              <BoxTextModalContainer />
              <BoxTextContainer />
            </ul>
          </li>
        </menu>
      </div>
    </div>
  );
}

export default App;
