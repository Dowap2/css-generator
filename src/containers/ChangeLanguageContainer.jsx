import React from "react";
import { ChangeLanguageComponent } from "components/ChangeLanguageComponent";
import { connect } from "react-redux";
import * as LanguageActions from "store/modules/languageState";

export function ChangeLanguageContainer(props) {
  return <ChangeLanguageComponent onChange={props.language} />;
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  language: lan => dispatch(LanguageActions.ChangeLanguage(lan))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeLanguageContainer);
