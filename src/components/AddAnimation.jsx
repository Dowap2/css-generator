import React from "react";
import { useSelector } from "react-redux";

import { SmallButton } from "ui/SmallButton";
import { FrameTab } from "ui/FrameTab";

export function AddAnimation(props) {
  const index = useSelector(state => state.indexState.createIndex);
  const menuList = useSelector(state => state.indexState.menuList);

  const menuItem = (
    <FrameTab value={index} onClick={e => props.setFrameIndex(index)} />
  );

  function addButton() {
    const menu = menuList.concat(menuItem);
    props.setFrameIndex(index);
    props.setIndex(Number(index) + 1);
    props.setMenuList(menu);
  }

  return (
    <div>
      <SmallButton onClick={e => addButton()} message={"frame"} />
      {menuList}
    </div>
  );
}
