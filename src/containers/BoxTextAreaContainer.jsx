import React from "react";
import { BoxTextArea } from "components/BoxTextArea";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxTextAreaContainer(props) {
  return <BoxTextArea onChange={props.text} />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  text: text => dispatch(boxActions.ChangeBoxText(text))
});

BoxTextAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxTextAreaContainer);
