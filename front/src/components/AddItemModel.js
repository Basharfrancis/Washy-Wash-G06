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
class ModalPage extends Component {
  state = {
    modal14: false,
    title: "",
    price: "",
    image: ""
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };
  onChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      console.log(this.state)
    );
  };
  onClick = e => {
    let params = {
      title: this.state.title,
      price: this.state.price,
      image: [this.state.image]
    };
    this.props.createItem(params);
  };
  render() {
    return (
      <MDBContainer>
        <MDBBtn color="primary" size="sm" onClick={this.toggle(14)}>
          Add Item
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Edit User</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <form>
                    <div className="grey-text">
                      <MDBInput
                        label="Title"
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                      />
                      <MDBInput
                        label="Price"
                        type="number"
                        validate
                        error="wrong"
                        success="right"
                        name="price"
                        value={this.state.price}
                        onChange={this.onChange}
                      />
                      <MDBInput
                        label="Title"
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        name="image"
                        value={this.state.image}
                        onChange={this.onChange}
                      />
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
            <MDBBtn color="primary" onClick={this.onClick}>
              Submit
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
