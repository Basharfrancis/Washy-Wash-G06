import React, { Component } from "react";
import "./Table.css";
import ModalPage from "../ModalPage";
import { MDBBtn, MDBContainer } from "mdbreact";
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  async componentWillReceiveProps(newProps) {
    this.setState({ users: newProps.users });
  }
  deleteUser = id => {
    this.props.deleteUser(id);
  };
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Users</h2>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Middle Name</th>
            <th>Email</th>
            <th>Edit/Delete</th>
          </tr>

          {this.state.users.map(user => (
            <tr>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.middle_name}</td>
              <td>{user.email}</td>
              <td className="edit-delete">
                <MDBContainer>
                  {" "}
                  <MDBBtn
                    color="primary"
                    size="sm"
                    onClick={() => this.deleteUser(user.id)}
                  >
                    Delete
                  </MDBBtn>
                </MDBContainer>

                <ModalPage user={user} editUser={this.props.editUser} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default Table;
