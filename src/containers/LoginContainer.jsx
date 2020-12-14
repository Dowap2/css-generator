import React from "react";
import { LoginComponent } from "components/LoginComponent";
import { connect } from "react-redux";
import * as userActions from "store/modules/userState";

export function LoginContainer(props) {
  return (
    <div>
      <LoginComponent userState={props.userState} />
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  userState: state => dispatch(userActions.ChangeUserState(state))
});

LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
