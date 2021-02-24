import React from "react";
import { connect } from "react-redux";
import * as modeState from "store/modules/modeState";
import { SwitchButtonComponents } from "components/SwitchButtonComponents";

export function SwitchButton(props) {
  return (
    <div>
      <SwitchButtonComponents onChange={props.modeState} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modeState: state => dispatch(modeState.ChangeMode(state))
});

SwitchButton = connect(mapStateToProps, mapDispatchToProps)(SwitchButton);
