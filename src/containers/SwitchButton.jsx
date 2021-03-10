import React from "react";
import { connect } from "react-redux";
import * as modeState from "store/modules/modeState";
import * as modalState from "store/modules/modalState";
import { SwitchButtonComponents } from "components/SwitchButtonComponents";

export function SwitchButton(props) {
  return (
    <div>
      <SwitchButtonComponents
        onChange={props.modeState}
        onChangeAnimation={props.modalState}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modeState: state => dispatch(modeState.ChangeMode(state)),
  modalState: state => dispatch(modalState.ChangeAnimationModalState(state))
});

SwitchButton = connect(mapStateToProps, mapDispatchToProps)(SwitchButton);
