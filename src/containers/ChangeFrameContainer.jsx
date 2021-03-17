import React from "react";
import { connect } from "react-redux";
import * as frameState from "store/modules/frameState";
import { ChangeFrameComponent } from "components/ChangeFrameComponents";

export function ChangeFrameContainer(props) {
  return (
    <div>
      <ChangeFrameComponent onChange={props.frameState} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  frameState: state => dispatch(frameState.ChangeFrame(state))
});

ChangeFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeFrameContainer);
