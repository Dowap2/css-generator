import React from "react";
import { connect } from "react-redux";
import * as frameState from "store/modules/frameState";
import * as boxState from "store/modules/boxState";
import { ChangeFrameComponent } from "components/ChangeFrameComponents";

export function ChangeFrameContainer(props) {
  return (
    <div>
      <ChangeFrameComponent
        onChange={props.frame}
        onChangeFrame={props.frameState}
        onChangeBoxState={props.boxState}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  frame: state => dispatch(frameState.ChangeFrame(state)),
  frameState: state => dispatch(frameState.ChangeFrameState(state)),
  boxState: state => dispatch(boxState.ChangeFrame(state))
});

ChangeFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeFrameContainer);
