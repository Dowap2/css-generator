import React from "react";
import { BoxTextButton } from "components/BoxTextButton";
import { connect } from "react-redux";
import * as modalActions from "store/modules/modalState";

export function BoxTextModalContainer(props) {
  return (
    <div>
      <BoxTextButton
        onChange={props.boxTextButton}
        onChangeName={props.modalName}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  boxTextButton: state => dispatch(modalActions.ChangeTextModalState(state)),
  modalName: state => dispatch(modalActions.ChangeModalName(state))
});

BoxTextModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxTextModalContainer);
