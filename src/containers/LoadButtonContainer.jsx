import React from "react";
import { LoadButton } from "components/LoadButton";
import { connect } from "react-redux";
import * as modalActions from "store/modules/modalState";

export function LoadButtonContainer(props) {
  return (
    <div>
      <LoadButton
        value={"load"}
        onChange={props.modal}
        onChangeName={props.modalName}
      />
      <LoadButton
        value={"upload"}
        onChange={props.modal}
        onChangeName={props.modalName}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modal: state => dispatch(modalActions.ChangeTextModalState(state)),
  modalName: name => dispatch(modalActions.ChangeModalName(name))
});

LoadButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadButtonContainer);
