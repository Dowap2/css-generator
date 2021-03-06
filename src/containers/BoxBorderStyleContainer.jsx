import React from "react";
import { BoxBorderStyleInput } from "components/BoxBorderStyleInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

const BoxBorderStyleContainer = props => {
  return (
    <div>
      <Label value={"border-styled"} />
      <BoxBorderStyleInput onChange={props.borderStyle} />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  borderStyle: borderStyle =>
    dispatch(boxActions.ChangeBorderStyle(borderStyle))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxBorderStyleContainer);
