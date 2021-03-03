import React from "react";
import { connect } from "react-redux";
import { BoxShadowX } from "components/BoxShadowX";
import { BoxShadowY } from "components/BoxShadowY";
import * as boxActions from "store/modules/boxState";

export function BoxShadowContainer(props) {
  return (
    <div>
      X
      <BoxShadowX onChange={props.shadowX} />
      Y
      <BoxShadowY onChange={props.shadowY} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  shadowX: state => dispatch(boxActions.ChangeBoxShadowX(state)),
  shadowY: state => dispatch(boxActions.ChangeBoxShadowY(state))
});

BoxShadowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxShadowContainer);
