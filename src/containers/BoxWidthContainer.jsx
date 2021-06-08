import React from "react";
import { BoxWidthInput } from "components/BoxWidthInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

const BoxWidthContainer = props => {
  return (
    <div>
      <Label value={"width"} />
      <BoxWidthInput onChange={props.boxWidth} />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  boxWidth: width => dispatch(boxActions.ChangeBoxWidth(width))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxWidthContainer);
