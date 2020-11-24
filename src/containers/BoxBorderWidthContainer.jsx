import React from "react";
import { BoxBorderWidthInput } from "components/BoxBorderWidthInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxBorderWidthContainer(props) {
  return (
    <div>
      <label>border-width</label>
      <BoxBorderWidthInput onChange={props.borderWidth} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  borderWidth: borderWidth =>
    dispatch(boxActions.ChangeBorderWidth(borderWidth))
});

BoxBorderWidthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxBorderWidthContainer);
