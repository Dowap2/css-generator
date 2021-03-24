import React from "react";
import { connect } from "react-redux";
import * as modeState from "store/modules/modeState";
import { ViewModeSwitchButtonComponent } from "components/ViewModeSwitchButtonComponent";

export function ViewModeSwitchButton(props) {
  return (
    <div>
      <ViewModeSwitchButtonComponent onChange={props.viewMode} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  viewMode: state => dispatch(modeState.ChangeViewMode(state))
});

ViewModeSwitchButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewModeSwitchButton);
