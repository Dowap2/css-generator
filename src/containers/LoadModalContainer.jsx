import React from "react";
import { LoadModalComponent } from "components/LoadModalComponent";
import { connect } from "react-redux";
import * as modalActions from "store/modules/modalState";

export function LoadModalContainer(props) {
  return <LoadModalComponent onClose={props.modal} onLoad={props.loadData} />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  modal: state => dispatch(modalActions.ChangeTextModalState(state)),
  loadData: data => dispatch(modalActions.ChangeLoadData(data))
});

LoadModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadModalContainer);
