import React from "react";
import { BoxTextButton } from "components/BoxTextButton";
import { connect } from "react-redux";
import * as boxActions from "store/modules/modalState";

export function BoxTextModalContainer(props) {
  return (
    <div>
      <BoxTextButton onChange={props.boxTextButton} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  boxTextButton: state => dispatch(boxActions.ChangeModalState(state))
});

BoxTextModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxTextModalContainer);
