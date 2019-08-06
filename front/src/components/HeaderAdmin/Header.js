import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavLink
} from "mdbreact";
class HeaderAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MDBNavbar color="indigo" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Admin Managment</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler />
          <MDBCollapse id="navbarCollapse3" navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/login/admin/user">User Managmant</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/login/admin/order">Order Mangment</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <div>Logo</div>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default HeaderAdmin;
