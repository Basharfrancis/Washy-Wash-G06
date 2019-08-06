import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import LoginForm from "./components/Login/login.js";
import LandinPage from "./pages/LandingPage";
import Admin from "./pages/Admin/Admin.js";
import EditForm from "./components/EditForm/EditForm.js";
import Table from "./components/Table/Table.js";
import AddForm from "./components/AddForm/AddForm.js";
import AdminUser from "./pages/Admin/AdminUser.js";
import AdminOrder from "./pages/Admin/AdminOrder";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <LandinPage {...props} />} />
        <Route exact path="/login" render={props => <LoginForm {...props} />} />
        <Route
          exact
          path="/login/admin"
          render={props => <Admin {...props} />}
        />
        <Route exact path="/table" render={props => <Table {...props} />} />

        <Route
          exact
          path="/login/admin/edituser"
          render={props => <EditForm {...props} />}
        />
        <Route
          path="/login/admin/adduser"
          render={props => <AddForm {...props} />}
        />
        <Route
          exact
          path="/login/admin/user"
          render={props => <AdminUser {...props} />}
        />
        <Route
          exact
          path="/login/admin/order"
          render={props => <AdminOrder {...props} />}
        />
      </div>
    );
  }
}
export default withRouter(App);
