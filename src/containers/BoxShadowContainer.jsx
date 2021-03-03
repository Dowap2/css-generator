import React from "react";
import { connect } from "react-redux";
import { BoxShadowX } from "components/BoxShadowX";
import * as boxActions from "store/modules/boxState";

export function BoxShadowContainer(props) {
  return (
    <div>
      x
      <BoxShadowX onChange={props.shadowX} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  shadowX: state => dispatch(boxActions.ChangeBoxShadowX(state))
});

BoxShadowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxShadowContainer);
