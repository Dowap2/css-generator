import React, { useState } from "react";
import { useSelector } from "react-redux";

import { SmallButton } from "ui/SmallButton";
import { FrameTab } from "ui/FrameTab";

export function AddAnimation(props) {
  let [menuList, setMenuList] = useState([]);

  const index = useSelector(state => state.createIndex.createIndex);

  function addButton() {
    props.setFrameIndex(index);
    props.setIndex(Number(index) + 1);
    setMenuList((menuList = menuList.concat(menuItem)));
  }

  const menuItem = (
    <FrameTab
      value={`menu${index}`}
      onClick={e => props.setFrameIndex(index)}
    />
  );

  if (index === 1) {
    menuList.push(
      <FrameTab
        value={`menu${index}`}
        onClick={e => props.setFrameIndex(index)}
      />
    );
  }

  return (
    <div>
      <SmallButton onClick={e => addButton()} message={"frame"} />
      {menuList}
    </div>
  );
}
