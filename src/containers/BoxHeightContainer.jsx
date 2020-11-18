import React from "react";
import { BoxHeightInput } from "components/BoxHeightInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxValue";

export function BoxHeightContainer(props) {
  return (
    <div>
      <BoxHeightInput onChange={props.boxHeight} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  boxHeight: height => dispatch(boxActions.ChangeBoxHeight(height))
});

BoxHeightContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxHeightContainer);
