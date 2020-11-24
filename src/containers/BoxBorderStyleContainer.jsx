import React from "react";
import { BoxBorderStyleInput } from "components/BoxBorderStyleInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxBorderStyleContainer(props) {
  return (
    <div>
      <label>border-style</label>
      <BoxBorderStyleInput onChange={props.borderStyle} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  borderStyle: borderStyle =>
    dispatch(boxActions.ChangeBorderStyle(borderStyle))
});

BoxBorderStyleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxBorderStyleContainer);
