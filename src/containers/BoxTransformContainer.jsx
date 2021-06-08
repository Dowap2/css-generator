import React from "react";
import { BoxTransformX } from "components/BoxTransformX";
import { BoxTransformY } from "components/BoxTransformY";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

const BoxTransformContainer = props => {
  return (
    <div>
      <Label value={"X"} />
      <BoxTransformX onChange={props.transformX} />
      <Label value={"Y"} />
      <BoxTransformY onChange={props.transformY} />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  transformX: value => dispatch(boxActions.ChangeBoxTransformX(value)),
  transformY: value => dispatch(boxActions.ChangeBoxTransformY(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxTransformContainer);
