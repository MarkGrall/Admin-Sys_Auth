import React from "react";
import { connect } from "react-redux";
import { enableClassicTheme } from "../../redux/actions/themeActions";

import Overview from "../plans/Overview";

class ThemeClassic extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(enableClassicTheme());
  }

  render() {
    return <Overview />;
  }
}

export default connect()(ThemeClassic);
