import React from "react";
import { BoxColorInput } from "components/BoxColorInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxColorContainer(props) {
  return (
    <div>
      <label>color</label>
      <BoxColorInput onChange={props.boxColor} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  boxColor: color => dispatch(boxActions.ChangeBoxColor(color))
});

BoxColorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxColorContainer);
