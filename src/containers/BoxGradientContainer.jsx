import React from "react";
import { BoxGradientColor1Input } from "components/BoxGradientColor1Input";
import { BoxGradientColor2Input } from "components/BoxGradientColor2Input";
import { BoxGradientStyleInput } from "components/BoxGradientStyleInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

const BoxGradientContainer = props => {
  return (
    <div>
      <Label value={"Gradient"} />
      <BoxGradientColor1Input onChange={props.gradientColorInput1} />
      <BoxGradientColor2Input onChange={props.gradientColorInput2} />
      <BoxGradientStyleInput
        onChange={props.gradientStyle}
        onChangeDeg={props.gradientDeg}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  gradientColorInput1: color =>
    dispatch(boxActions.ChangeBoxGradientColor1(color)),
  gradientColorInput2: color =>
    dispatch(boxActions.ChangeBoxGradientColor2(color)),
  gradientStyle: style => dispatch(boxActions.ChangeBoxGradientStyle(style)),
  gradientDeg: deg => dispatch(boxActions.ChangeBoxGradientDeg(deg))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxGradientContainer);
