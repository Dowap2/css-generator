import React from "react";
import { BoxBorderRadiusInput } from "components/BoxBorderRadiusInput";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import * as boxActions from "store/modules/boxState";
import { Label } from "ui/ContainerBox";
import styled from "styled-components";

const BorderRadiusBox = styled.div``;

const BoxBorderRadiusContainer = props => {
  const TopLeft = useSelector(
    state => state.boxState.state.borderRadiusTopLeft
  );
  const TopRight = useSelector(
    state => state.boxState.state.borderRadiusTopRight
  );
  const BottomLeft = useSelector(
    state => state.boxState.state.borderRadiusBottomLeft
  );
  const BottomRight = useSelector(
    state => state.boxState.state.borderRadiusBottomRight
  );
  return (
    <BorderRadiusBox>
      <Label value={"border-radius"} />
      <Label value={"top-left"} />
      <BoxBorderRadiusInput
        onChange={props.borderRadiusTopLeft}
        value={TopLeft}
      />
      <Label value={"top-right"} />
      <BoxBorderRadiusInput
        onChange={props.borderRadiusTopRight}
        value={TopRight}
      />
      <Label value={"bottom-left"} />
      <BoxBorderRadiusInput
        onChange={props.borderRadiusBottomLeft}
        value={BottomLeft}
      />
      <Label value={"bottom-right"} />
      <BoxBorderRadiusInput
        onChange={props.borderRadiusBottomRight}
        value={BottomRight}
      />
    </BorderRadiusBox>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  borderRadiusTopLeft: state =>
    dispatch(boxActions.ChangeBorderRadiusTopLeft(state)),
  borderRadiusTopRight: state =>
    dispatch(boxActions.ChangeBorderRadiusTopRight(state)),
  borderRadiusBottomLeft: state =>
    dispatch(boxActions.ChangeBorderRadiusBottomLeft(state)),
  borderRadiusBottomRight: state =>
    dispatch(boxActions.ChangeBorderRadiusBottomRight(state))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxBorderRadiusContainer);
