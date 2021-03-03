import React from "react";
import { connect } from "react-redux";
import { BoxShadowX } from "components/BoxShadowX";
import { BoxShadowY } from "components/BoxShadowY";
import { BoxShadowColor } from "components/BoxShadowColor";
import * as boxActions from "store/modules/boxState";

export function BoxShadowContainer(props) {
  return (
    <div>
      X
      <BoxShadowX onChange={props.shadowX} />
      Y
      <BoxShadowY onChange={props.shadowY} />
      Color
      <BoxShadowColor onChange={props.shadowColor} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  shadowX: state => dispatch(boxActions.ChangeBoxShadowX(state)),
  shadowY: state => dispatch(boxActions.ChangeBoxShadowY(state)),
  shadowColor: state => dispatch(boxActions.ChangeBoxShadowColor(state))
});

BoxShadowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxShadowContainer);
