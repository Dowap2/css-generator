import React from "react";
import { BoxBorderWidthInput } from "components/BoxBorderWidthInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

const BoxBorderWidthContainer = props => {
  return (
    <div>
      <Label value={"border-width"} />
      <BoxBorderWidthInput onChange={props.borderWidth} />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  borderWidth: borderWidth =>
    dispatch(boxActions.ChangeBorderWidth(borderWidth))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxBorderWidthContainer);
