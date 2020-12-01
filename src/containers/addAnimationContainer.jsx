import React from "react";
import { AddAnimation } from "components/AddAnimation";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";
import * as indexActions from "store/modules/indexState";

export function AddAnimationContainer(props) {
  return (
    <div>
      <AddAnimation
        setFrameIndex={props.frameIndex}
        setIndex={props.index}
        setMenuList={props.menuList}
        addFrame={props.addFrame}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDisPatchToProps = dispatch => ({
  frameIndex: frameIndex => dispatch(indexActions.ChangeFrameIndex(frameIndex)),
  index: index => dispatch(indexActions.ChangeCreateIndex(index)),
  menuList: list => dispatch(indexActions.ChangeMenuList(list)),
  addFrame: value => dispatch(boxActions.AddFrame(value))
});

AddAnimationContainer = connect(
  mapStateToProps,
  mapDisPatchToProps
)(AddAnimationContainer);
