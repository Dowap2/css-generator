import React from "react";
import { BoxTextArea } from "components/BoxTextArea";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import * as ModalActions from "store/modules/modalState";

export function BoxTextAreaContainer(props) {
  return <BoxTextArea onChange={props.text} onClose={props.close} />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  text: text => dispatch(boxActions.ChangeBoxText(text)),
  close: state => dispatch(ModalActions.ChangeModalState(state))
});

BoxTextAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxTextAreaContainer);
