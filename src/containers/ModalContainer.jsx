import React from "react";
import { ModalComponent } from "components/ModalComponent";
import { connect } from "react-redux";
import * as boxActions from "store/modules/modalState";

const ModalContainer = props => {
  return (
    <div>
      <ModalComponent onChange={props.modalState} />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modalState: state => dispatch(boxActions.ChangeModalState(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
