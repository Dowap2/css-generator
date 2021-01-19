import React from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { SmallLongButton } from "ui/SmallLongButton";

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
  margin-left: 20px;
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
const DataButton = styled.button`
  background: #ffffff;
  border: 1px solid #594f3c;
  color: #594f3c;
  height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export function LoadModalComponent(props) {
  const type = useSelector(state => state.modalState.loadType);
  const state = useSelector(state => state.boxState.state);
  const loadData = useSelector(state => state.modalState.loadData);
  const loadDataButton = useSelector(state => state.modalState.loadDataButton);
  const [name, setName] = useState("");

  const listFunc = () => {
    axios.get("http://localhost:8000/api/box", {}).then(function(res) {
      props.onLoad(res.data.box);
      sortList();
    });
  };

  const sortList = () => {
    for (let i = 0; i < loadData.length; i++) {
      props.onChangeLoad(
        loadData.map(x => (
          <ul>
            <DataButton onClick={e => props.onChange(x.state.state)}>
              {x.state.name || "undefined"}
            </DataButton>
          </ul>
        ))
      );
    }
  };

  const okFunc = () => {
    axios
      .post("http://localhost:8000/api/box", {
        name: name,
        state
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    setName("");
    props.onClose("none");
  };

  const enterFunc = key => {
    if (key === "Enter") {
      okFunc();
    }
  };
  return (
    <TextAreaBox>
      <Label>{type}</Label>
      {type === "upload" ? (
        <TextArea
          placeholder="저장할 이름를 입력해주세요"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyPress={e => enterFunc(e.key)}
        />
      ) : (
        <LoadBox>
          <Label>불러올 항목을 선택하시오</Label>
          <SmallLongButton
            onClick={e => listFunc()}
            message={"리스트 불러오기"}
          ></SmallLongButton>
          {loadDataButton}
        </LoadBox>
      )}
      <Button onClick={e => okFunc()}>OK</Button>
      <Button onClick={e => props.onClose("none")}>Close</Button>
    </TextAreaBox>
  );
}
