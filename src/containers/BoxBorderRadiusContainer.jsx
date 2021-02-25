import React from "react";
import { BoxBorderRadiusInput } from "components/BoxBorderRadiusInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxBorderRadiusContainer(props) {
  return (
    <div>
      <label>border-radius</label>
      <BoxBorderRadiusInput onChange={props.borderColor} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  borderColor: color => dispatch(boxActions.ChangeBorderColor(color))
});

BoxBorderRadiusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxBorderRadiusContainer);
