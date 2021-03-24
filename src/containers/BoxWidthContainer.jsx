import React from "react";
import { BoxWidthInput } from "components/BoxWidthInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

export function BoxWidthContainer(props) {
  return (
    <div>
      <Label value={"width"} />
      <BoxWidthInput onChange={props.boxWidth} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  boxWidth: width => dispatch(boxActions.ChangeBoxWidth(width))
});

BoxWidthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxWidthContainer);
