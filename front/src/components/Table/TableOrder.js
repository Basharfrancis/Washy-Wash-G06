import React, { Component } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { MDBBtn, MDBContainer } from "mdbreact";
class TableOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ orders: newProps.orders.data });
  }
  deleteUser = id => {
    this.props.deleteUser(id);
  };
  render() {
    console.log(
      "hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      this.state
    );
    return (
      <div className="table-order">
        <MDBTable>
          <MDBTableHead>
            <tr>
              <th>customer_id</th>
              <th>details</th>
              <th>priority</th>
              <th>order_status</th>
              <th>Edit/Delete</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {this.state.orders &&
              this.state.orders.map(order => (
                <tr>
                  <td>{order.customer_id}</td>
                  <td>{order.details}</td>
                  <td>{order.priority}</td>
                  <td>{order.order_status}</td>
                  <td className="edit-delete">
                    <MDBContainer>
                      {" "}
                      <MDBBtn color="primary" size="sm">
                        Delete
                      </MDBBtn>
                    </MDBContainer>
                    <MDBContainer>
                      {" "}
                      <MDBBtn color="primary" size="sm">
                        uPDATE
                      </MDBBtn>
                    </MDBContainer>
                  </td>
                </tr>
              ))}
          </MDBTableBody>
        </MDBTable>
      </div>
    );
  }
}

export default TableOrder;
