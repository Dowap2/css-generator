import React, { useState } from "react";
import { useSelector } from "react-redux";

export function AddAnimation(props) {
  let [index, setIndex] = useState(1);
  let [menuList, setMenuList] = useState([]);

  const frameIndex = useSelector(state => state.indexValue.frameIndex);

  function addButton() {
    props.setFrameIndex(frameIndex + 1);
    setMenuList((menuList = menuList.concat(menuItem)), setIndex(index + 1));
  }

  const menuItem = (
    <li>
      <button
        className="label"
        value={index}
        onClick={e => props.onChange(e.target.value)}
      >
        menu{index}
      </button>
    </li>
  );

  if (index === 0) {
    menuList.push(
      <li>
        <button
          className="label"
          value={index}
          onClick={e => props.onChange(e.target.value)}
        >
          menu{index}
        </button>
      </li>
    );
  }

  return (
    <div>
      <button className="add_animation" onClick={e => addButton()}>
        Menu{frameIndex}
      </button>
      <ul className>{menuList}</ul>
    </div>
  );
}
