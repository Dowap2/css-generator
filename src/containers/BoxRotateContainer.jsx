import React from "react";
import { BoxRotateX } from "components/BoxRotateX";
import { BoxRotateY } from "components/BoxRotateY";
import { BoxRotateZ } from "components/BoxRotateZ";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxRotateContainer(props) {
  return (
    <div>
      <BoxRotateX onChange={props.rotateX} />
      <BoxRotateY onChange={props.rotateY} />
      <BoxRotateZ onChange={props.rotateZ} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  rotateX: value => dispatch(boxActions.ChangeBoxRotateX(value)),
  rotateY: value => dispatch(boxActions.ChangeBoxRotateY(value)),
  rotateZ: value => dispatch(boxActions.ChangeBoxRotateZ(value))
});

BoxRotateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxRotateContainer);
