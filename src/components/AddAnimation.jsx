import React from "react";
import { useSelector } from "react-redux";

import { SmallButton } from "ui/SmallButton";
import { FrameTab } from "ui/FrameTab";

export function AddAnimation(props) {
  const index = useSelector(state => state.indexState.createIndex);
  const menuList = useSelector(state => state.indexState.menuList);
  const stateValue = useSelector(state => state.boxState.state);
  const frameValue = useSelector(state => state.boxState.state);

  const menuItem = (
    <FrameTab value={index} onClick={e => props.setFrameIndex(index)} />
  );

  function addButton() {
    const menu = menuList.concat(menuItem);
    const frameState = stateValue.concat(frameValue[0]);
    props.setFrameIndex(index);
    props.setIndex(Number(index) + 1);
    props.setMenuList(menu);
    props.addFrame(frameState);
  }

  return (
    <div>
      <SmallButton onClick={e => addButton()} message={"frame"} />
      <button onClick={e => console.log(frameValue)}></button>
      {menuList}
    </div>
  );
}
