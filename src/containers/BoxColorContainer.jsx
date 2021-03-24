import React from "react";
import { BoxColorInput } from "components/BoxColorInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

export function BoxColorContainer(props) {
  return (
    <div>
      <Label value={"color"} />
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
