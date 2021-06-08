import React from "react";
import { BoxColorTypeInput } from "components/BoxColorTypeInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

const BoxColorTypeContainer = props => {
  return (
    <div>
      <Label value={"color-type"} />
      <BoxColorTypeInput onChange={props.colorType} />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  colorType: colorType => dispatch(boxActions.ChangeColorType(colorType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxColorTypeContainer);
