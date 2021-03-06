import React from "react";
import { BoxBorderColorInput } from "components/BoxBorderColorInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

const BoxBorderColorContainer = props => {
  return (
    <div>
      <Label value={"border-color"} />
      <BoxBorderColorInput onChange={props.borderColor} />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  borderColor: color => dispatch(boxActions.ChangeBorderColor(color))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxBorderColorContainer);
