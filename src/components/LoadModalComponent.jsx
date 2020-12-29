import React from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TextAreaBox = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  z-index: 1000;
`;
const Label = styled.label`
  width: 500px;
  height: 100px;
  z-index: 1000;
`;
const LoadBox = styled.div`
  background: #ffffff;
  width: 500px;
  height: 500px;
  z-index: 1000;
`;
const TextArea = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  position: relative;
`;

export function LoadModalComponent(props) {
  const type = useSelector(state => state.modalState.loadType);
  const state = useSelector(state => state.boxState.state);
  const loadData = useSelector(state => state.modalState.loadData);
  const [name, setName] = useState("");
  const [listItem, setListItem] = useState([]);
  const listFunc = () => {
    axios.get("http://localhost:8000/api", {}).then(function(res) {
      setListItem(res.data.box);
      sortList(listItem);
      // for (let i = 0; i < listItem.length; i++) {
      //   console.log(i);
      //   console.log(list);
      //   setList(
      //     list.concat(<div>{listItem[i].state.name || "undefined"}</div>)
      //   );
      // }
    });
  };
  const sortList = list => {
    for (let i = 0; i < list.length; i++) {
      console.log(loadData);
      props.onLoad(
        loadData.concat(<button>{list[i].state.name || "undefined"}</button>)
      );
    }
  };
  const okFunc = () => {
    axios
      .post("http://localhost:8000/api", {
        name: name,
        state
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    props.onClose("none");
  };
  return (
    <TextAreaBox>
      <Label>{type}</Label>
      {type === "upload" ? (
        <TextArea
          placeholder="저장할 이름를 입력해주세요"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      ) : (
        <LoadBox>
          불러올 항목을 선택하시오
          <Button onClick={e => listFunc()}>리스트 불러오기</Button>
          {loadData}
        </LoadBox>
      )}
      <Button onClick={e => okFunc()}>OK</Button>
      <Button onClick={e => props.onClose("none")}>Close</Button>
    </TextAreaBox>
  );
}
