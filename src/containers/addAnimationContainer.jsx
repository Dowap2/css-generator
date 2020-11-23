import React from "react";
import { AddAnimation } from "components/AddAnimation";
import { connect } from "react-redux";
import * as frameIndexChange from "store/modules/frameIndex";
import * as createIndexChange from "store/modules/createIndex";

export function AddAnimationContainer(props) {
  return (
    <div>
      <AddAnimation setFrameIndex={props.frameIndex} setIndex={props.index} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDisPatchToProps = dispatch => ({
  frameIndex: frameIndex =>
    dispatch(frameIndexChange.ChangeFrameIndex(frameIndex)),
  index: index => dispatch(createIndexChange.ChangeIndex(index))
});

AddAnimationContainer = connect(
  mapStateToProps,
  mapDisPatchToProps
)(AddAnimationContainer);
