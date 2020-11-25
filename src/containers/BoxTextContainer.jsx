import React from "react";
import { BoxTextStyle } from "components/BoxTextStyle";
import { BoxTextColor } from "components/BoxTextColor";
import { BoxFontSize } from "components/BoxFontSize";
import { connect } from "react-redux";
import * as boxActions from "store/modules/boxState";

export function BoxTextContainer(props) {
  return (
    <div>
      <BoxTextStyle onChange={props.boxTextStyle} />
      <BoxTextColor onChange={props.boxTextColor} />
      <BoxFontSize onChange={props.boxFontSize} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  boxTextStyle: style => dispatch(boxActions.ChangeBoxTextStyle(style)),
  boxTextColor: color => dispatch(boxActions.ChangeBoxTextColor(color)),
  boxFontSize: size => dispatch(boxActions.ChangeBoxFontSize(size))
});

BoxTextContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxTextContainer);
