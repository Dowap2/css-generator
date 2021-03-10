import React from "react";
import { LoadModalComponent } from "components/LoadModalComponent";
import { connect } from "react-redux";
import * as modalActions from "store/modules/modalState";
import * as boxActions from "store/modules/boxState";

export function LoadModalContainer(props) {
  return (
    <LoadModalComponent
      onClose={props.modal}
      onLoad={props.loadData}
      onChange={props.state}
      onChangeLoad={props.loadDataButton}
    />
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modal: state => dispatch(modalActions.ChangeModalState(state)),
  loadData: data => dispatch(modalActions.ChangeLoadData(data)),
  loadDataButton: state => dispatch(modalActions.ChangeLoadDataButton(state)),
  state: state => dispatch(boxActions.ChangeState(state))
});

LoadModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadModalContainer);
