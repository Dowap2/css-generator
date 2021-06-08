import React from "react";
import { connect } from "react-redux";
import { BoxShadowX } from "components/BoxShadowX";
import { BoxShadowY } from "components/BoxShadowY";
import { BoxShadowColor } from "components/BoxShadowColor";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";

const BoxShadowContainer = props => {
  return (
    <div>
      <Label value={"X"} />
      <BoxShadowX onChange={props.shadowX} />
      <Label value={"Y"} />
      <BoxShadowY onChange={props.shadowY} />
      <Label value={"Color"} />
      <BoxShadowColor onChange={props.shadowColor} />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  shadowX: state => dispatch(boxActions.ChangeBoxShadowX(state)),
  shadowY: state => dispatch(boxActions.ChangeBoxShadowY(state)),
  shadowColor: state => dispatch(boxActions.ChangeBoxShadowColor(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(BoxShadowContainer);
