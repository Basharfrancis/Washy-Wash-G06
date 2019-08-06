import React, { Component } from "react";
import Header from "../../components/HeaderAdmin/Header";
import { crud } from "./controller/controller.js";
import Table from "../../components/Table/Table.js";
import ModalPage2 from "../../components/ModalPage2";
class AdminUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.crud = new crud();
  }
  async componentDidMount() {
    let users = await this.crud.getUsers();
    this.setState({ users });
    console.log("users====>", users);
  }
  deleteUser = async id => {
    await this.crud.deleteUser(id);
    let users = this.state.users.filter(userid => userid.id !== id);
    this.setState({ users });
  };
  addUser = async ({
    first_name,
    last_name,
    middle_name,
    email,
    password,
    roles
  }) => {
    const user = await this.crud.createUsers({
      first_name,
      last_name,
      middle_name,
      email,
      password,
      roles
    });
    console.log(user);
    let users = await [...this.state.users, user.data];
    this.setState({ users });
  };

  editUser = async params => {
    const users = await this.crud.editUser(params);
    const newUsers = [...this.state.users];
    newUsers[params.id] = params;
    this.setState({ users: newUsers });
  };
  render() {
    console.log('======users=======>',this.state.users)
    return (
      <div>
        <Header />
        <ModalPage2 addUser={this.addUser} />
        <Table
          users={this.state.users}
          deleteUser={this.deleteUser}
          addUser={this.addUser}
          editUser={this.editUser}
          {...this.props}
        />
      </div>
    );
  }
}

export default AdminUser;
