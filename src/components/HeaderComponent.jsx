import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 60px;
  background: #f5f5f5;
`;

export function HeaderComponent() {
  const userInfo = useSelector(state => state.userState.userInfo);
  const userName = useSelector(state => state.userState.userName);
  return (
    <div>
      <Header>
        header{userInfo}
        {userName}
      </Header>
    </div>
  );
}
