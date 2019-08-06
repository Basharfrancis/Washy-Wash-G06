import React, { Component } from "react";
import AdminOrder from "./AdminOrder.js";
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <AdminOrder />
      </div>
    );
  }
}

export default Admin;
