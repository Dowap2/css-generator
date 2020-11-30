import React from "react";
import { AddAnimation } from "components/AddAnimation";
import { connect } from "react-redux";
import * as indexActions from "store/modules/indexState";

export function AddAnimationContainer(props) {
  return (
    <div>
      <AddAnimation
        setFrameIndex={props.frameIndex}
        setIndex={props.index}
        setMenuList={props.menuList}
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
  menuList: list => dispatch(indexActions.ChangeMenuList(list))
});

AddAnimationContainer = connect(
  mapStateToProps,
  mapDisPatchToProps
)(AddAnimationContainer);