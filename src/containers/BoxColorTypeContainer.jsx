import React from "react";
import { BoxColorTypeInput } from "components/BoxColorTypeInput";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxColorTypeContainer(props) {
  return (
    <div>
      <label>color-type</label>
      <BoxColorTypeInput onChange={props.colorType} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  colorType: colorType => dispatch(boxActions.ChangeColorType(colorType))
});

BoxColorTypeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxColorTypeContainer);
