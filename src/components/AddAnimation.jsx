import React, { useState } from "react";
import { useSelector } from "react-redux";

export function AddAnimation(props) {
  let [menuList, setMenuList] = useState([]);

  const index = useSelector(state => state.createIndex.createIndex);

  function addButton() {
    props.setFrameIndex(index);
    props.setIndex(Number(index) + 1);
    setMenuList((menuList = menuList.concat(menuItem)));
  }

  const menuItem = (
    <li>
      <button
        className="label"
        value={index}
        onClick={e => props.setFrameIndex(index)}
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
          onClick={e => props.setIndex(e.target.value)}
        >
          menu{index}
        </button>
      </li>
    );
  }

  return (
    <div>
      <button className="add_animation" onClick={e => addButton()}>
        Menu생성
      </button>
      <ul className>{menuList}</ul>
    </div>
  );
}
