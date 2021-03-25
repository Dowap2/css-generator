import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Sidebar = styled.div`
  background: ${props => (props.mode === "light" ? "#ffffff" : "#0d1218")};
  height: 100vh;
  width: 20vw;
  display: block;
  float: left;
`;

export const LabelContainer = styled.div`
  width: 100%;
  height: 40px;
  color: ${props => (props.mode === "light" ? "#ffffff" : "#58a6ff")};
  font-weight: 700;
  background: ${props => (props.mode === "light" ? "#594f3c" : "#0d1218")};
  border-bottom: ${props =>
    props.mode === "light"
      ? "1px solid rgba(255, 0, 0, .0)"
      : "1px solid #c9d1d9"};
  text-align: center;
  line-height: 40px;
  border-radius: 5px 5px 0px 0px;
`;

const ListContainer = styled.li`
  list-style: none;
  margin: 0;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  color: #594f3c;
  background: ${props => (props.mode === "light" ? "#d9c8b4" : "#0d1218")};
  border: ${props =>
    props.mode === "light"
      ? "1px solid rgba(255, 0, 0, .0)"
      : "1px solid #c9d1d9"};
  border-radius: 5px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.12);
`;

export const Label = props => {
  const mode = useSelector(state => state.modeState.viewMode);
  return <LabelContainer mode={mode}>{props.value}</LabelContainer>;
};

export const List = props => {
  const mode = useSelector(state => state.modeState.viewMode);
  return <ListContainer mode={mode}>{props.value}</ListContainer>;
};
