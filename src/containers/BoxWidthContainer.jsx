import React from "react";
import { BoxWidthInput } from "components/BoxWidthInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxWidthContainer(props) {
  return (
    <div>
      <label>width</label>
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
