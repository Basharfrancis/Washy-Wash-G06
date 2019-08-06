import React, { Component } from "react";
import "./AddOrder.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBCol,
  MDBFormInline
} from "mdbreact";
import NumericInput from "react-numeric-input";
class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [],
      order: [],
      prioraty: false
    };
  }
  onChange = (e, index) => {
    const price = this.state.items[index].price * e;
    const title = this.state.items[index].title;
    const order = [...this.state.order];
    order[index]["price"] = price;
    order[index]["title"] = title;
    this.setState({ order }, () => console.log(this.state.order));
  };
  componentWillReceiveProps(newProps) {
    this.setState(
      {
        orders: newProps.orders,
        items: newProps.items.data,
        order: newProps.items.data
      },
      () => {
        for (let i = 0; i < this.state.order.length; i++) {
          const order = [...this.state.order];

          order[i]["select"] = false;
          this.setState({ order });
        }
      }
    );
  }

  onClick = e => {
    this.setState({ prioraty: !this.state.prioraty });
  };
  onClick2 = (e, index) => {
    const order = [...this.state.order];
    order[index]["select"] = !order[index]["select"];
    this.setState({ order }, () => console.log(this.state.order));
  };
  submit = () => {
    const customer_id = localStorage.getItem("user");
    let order = [...this.state.order];
    order = order.filter(o => {
      if (o.select === true) {
        return o;
      }
    });
    let de = [];
    de = order.map(o => {
      // return { title: o.title, price: o.price };
      return `${o.title}the price is ${o.price}`;
    });

    const details = de.toString();
    const prioraty = this.state.prioraty;
    // const priority = [];
    // priority = de.map(d => {
    //   return d.prioraty;
    // });
    // console.log(priority);
    // const { customer_id, details, priority, order_status }
    // this.props.createOrder({customer_id,})
    this.props.createOrder({
      customer_id: customer_id,
      details: details,
      priority: prioraty,
      order_status: "pending"
    });
  };
  render() {
    return (
      <div>
        <h2> orders</h2>
        {this.state.items.map((item, index) => (
          <div>
            {" "}
            <MDBCol>
              <MDBCard style={{ width: "40%" }}>
                <MDBCardImage
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                  waves
                />
                {item.title}

                {item.price}
                <MDBCardBody className="card-order">
                  <MDBFormInline>
                    <MDBInput
                      label="Select"
                      type="checkbox"
                      id="checkbox1"
                      onClick={e => this.onClick2(e, index)}
                    />
                  </MDBFormInline>
                  <NumericInput
                    min={0}
                    onChange={e => this.onChange(e, index)}
                  />
                  <MDBFormInline />
               
                  <div>
                    {" "}
                    <MDBInput
                      hint={this.state.order[index].price}
                      disabled
                      type="text"
                    />
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        ))}
        <MDBInput disabled type="text" />
        <MDBInput
          label="Prioraty"
          type="checkbox"
          id="checkbox1"
          onClick={e => this.onClick(e)}
        />
        <MDBBtn onClick={this.submit}>Submit Order</MDBBtn>
      </div>
    );
  }
}

export default AddOrder;
