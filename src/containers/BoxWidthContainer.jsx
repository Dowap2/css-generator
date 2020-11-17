import React from "react";
import { BoxWidthInput } from "components/BoxWidthInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxValue";

export function BoxWidthContainer(props) {
  return (
    <div>
      <BoxWidthInput width={props.width} onChange={props.boxWidth} />
      <button onClick={e => console.log(props)}>button</button>
    </div>
  );
}

// props 값으로 넣어 줄 상태를 정의해줍니다.
const mapStateToProps = state => {
  return state;
};

// props 값으로 넣어 줄 액션 함수들을 정의해줍니다
const mapDispatchToProps = dispatch => ({
  boxWidth: () => dispatch(boxActions.ChangeBoxWidth())
});

// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
// eslint-disable-next-line no-func-assign
BoxWidthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxWidthContainer);
