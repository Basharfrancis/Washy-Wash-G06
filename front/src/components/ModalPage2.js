import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
class ModalPage2 extends Component {
  state = {
    modal14: false,
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    password: "",
    roles: []
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  onChangeRole = event => {
    let roles = [event.target.value];
    this.setState({ roles }, () => console.log(this.state.roles));
  };
  addUser = () => {
    this.props.addUser(this.state);
  };
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="primary" size="sm" onClick={this.toggle(14)}>
          Add User
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Add User</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form>
                    <div className="grey-text">
                      <MDBInput
                        label="First Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="first_name"
                        value={this.state.first_name}
                        onChange={this.onChange}
                      />
                      <MDBInput
                        label="Last Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="last_name"
                        value={this.state.last_name}
                        onChange={this.onChange}
                      />
                      <MDBInput
                        label="Middle Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="middle_name"
                        value={this.state.middle_name}
                        onChange={this.onChange}
                      />
                      <MDBInput
                        label="Email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      <MDBInput
                        label="Password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      <MDBDropdown>
                        <MDBDropdownToggle caret color="primary">
                          Roles
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic onClick={this.onChangeRole}>
                          <MDBDropdownItem name="admin" value="1">
                            Admin
                          </MDBDropdownItem>
                          <MDBDropdownItem name="customers" value="2">
                            Customer
                          </MDBDropdownItem>
                          <MDBDropdownItem name="employee" value="3">
                            Employee
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </div>
                    <div className="text-center" />
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(14)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" onClick={this.addUser}>
              Add
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage2;
