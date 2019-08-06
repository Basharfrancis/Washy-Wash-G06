import React from "react";
import ReactDOM from "react-dom";
import { MDBBtn, MDBContainer } from "mdbreact";
import "./Filter.css";
import { crud } from "../../pages/Admin/controller/controller.js";
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      filteredCustomers: []
    };
    this.crud = new crud();
  }

  async componentDidMount() {
    const customers = await this.crud.getUsers();
    const filteredCustomers = [...this.state.customers];
    this.setState({ customers, filteredCustomers });
    console.log(this.state);
  }

  sortBySelect = e => {
    const sortBy = e.target.value;
    if (sortBy === "none") return;
    var filteredCustomers = [...this.state.filteredCustomers];
    function compareLastName(a, b) {
      // Use toUpperCase() to ignore character casing
      const last_nameA = a.last_name.toUpperCase();
      const last_nameB = b.last_name.toUpperCase();

      let comparison = 0;
      if (last_nameA > last_nameB) {
        comparison = 1;
      } else if (last_nameA < last_nameB) {
        comparison = -1;
      }
      return comparison;
    }
    function compareFirstName(a, b) {
      // Use toUpperCase() to ignore character casing
      const first_nameA = a.first_name.toUpperCase();
      const first_nameB = b.first_name.toUpperCase();

      let comparison = 0;
      if (first_nameA > first_nameB) {
        comparison = 1;
      } else if (first_nameA < first_nameB) {
        comparison = -1;
      }
      return comparison;
    }

    filteredCustomers.sort(
      sortBy === "last_name" ? compareLastName : compareFirstName
    );
    this.setState({
      filteredCustomers
    });
  };
  filterName = e => {
    e.preventDefault();
    const name = e.target.value.toUpperCase();
    var filteredCustomers;
    filteredCustomers = this.state.filteredCustomers.filter(c => {
      return (
        c.first_name.toUpperCase().includes(name) ||
        c.last_name.toUpperCase().includes(name)
      );
    });
    this.setState({ filteredCustomers });
    console.log("tessssssssssst");
  };

  filterGender = e => {
    // e.preventDefault();
    const gender = e.target.value;
    console.log(gender);
    var filteredCustomers;
    if (gender === "all") filteredCustomers = [...this.state.customers];
    else {
      filteredCustomers = this.state.customers.filter(c => {
        return c.gender === gender;
      });
    }
    this.setState({ filteredCustomers });
  };
  selectUser = (e, index) => {
    console.log(index);
    const user = this.state.filteredCustomers[index];
    localStorage.setItem("user", user.id);
    console.log("useeeeeeeeeeeeer", user);
  };
  render() {
    return (
      <div className="App">
        <fieldset>
          <legend>
            <b>Select user </b>
          </legend>
          <p>
            <label>Sort By: </label>
            <select id="myList" onChange={this.sortBySelect}>
              <option value="none">select</option>
              <option value="first_name">First Name</option>
              <option value="last_name">Last Name</option>
            </select>
          </p>
          <input
            type="text"
            name="nameFilter"
            placeholder="name"
            onChange={this.filterName}
          />
          <div class="control">
            <label class="radio">
              <input
                type="radio"
                name="gender"
                value="all"
                onChange={this.filterGender}
              />
              All
            </label>
          </div>
        </fieldset>

        <br />
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Middle Name</th>
            <th>Email</th>
            <th>Edit/Delete</th>
          </tr>

          {this.state.filteredCustomers.map((user, index) => (
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
                    onClick={e => this.selectUser(e, index)}
                  >
                    Select
                  </MDBBtn>
                </MDBContainer>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default Filter;
