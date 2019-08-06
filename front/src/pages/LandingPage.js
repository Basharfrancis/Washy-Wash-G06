import React, { Component } from "react";
import LoginForm from "../components/Login/login.js";
class LandinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <LoginForm {...this.props} />
      </div>
    );
  }
}

export default LandinPage;
