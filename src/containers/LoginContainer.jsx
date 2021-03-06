import React from "react";
import { LoginComponent } from "components/LoginComponent";
import { connect } from "react-redux";
import * as userActions from "store/modules/userState";

const LoginContainer = props => {
  return (
    <div>
      <LoginComponent
        signIn={props.signIn}
        signUp={props.signUp}
        userInfo={props.userInFO}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  signUp: state => dispatch(userActions.ChangeSignUpModal(state)),
  signIn: state => dispatch(userActions.ChangeSignInModal(state)),
  userInfo: state => dispatch(userActions.ChangeUserInfo(state))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
