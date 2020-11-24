import React from "react";
import { BoxBorderColorInput } from "components/BoxBorderColorInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxBorderColorContainer(props) {
  return (
    <div>
      <label>border-color</label>
      <BoxBorderColorInput onChange={props.borderColor} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  borderColor: color => dispatch(boxActions.ChangeBorderColor(color))
});

BoxBorderColorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxBorderColorContainer);
