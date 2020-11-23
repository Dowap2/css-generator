import React from "react";
import { addAnimation } from "components/AddAnimation";
import connect from "react-redux";
import * as boxActions from "store/modules/indexValue";

export function AddAnimationContainer(props) {
  return (
    <div>
      <addAnimation onChange={props.frameIndex} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDisPatchToProps = dispatch => ({
  frameIndex: frameIndex => dispatch(boxActions.ChangeFrameIndex(frameIndex))
});

AddAnimationContainer = connect(
  mapStateToProps,
  mapDisPatchToProps
)(AddAnimationContainer);
