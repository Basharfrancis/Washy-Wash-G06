import React, { Component } from "react";
import { crudOrder } from "./controller/controllerOrder.js";
import { crudItem } from "./controller/controllerItem.js";
import TableOrder from "../../components/Table/TableOrder.js";
import Header from "../../components/HeaderAdmin/Header";
import AddOrder from "../../components/AddOrder/AddOrder";
import SearchPage from "../../components/Filter/Filter.js";
import AddItem from "../../components/AddItemModel";
class AdminOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: []
    };
    this.crudOrder = new crudOrder();
    this.crudItem = new crudItem();
  }
  async componentDidMount() {
    const orders = await this.crudOrder.getOrders();
    const items = await this.crudItem.getItems();

    this.setState({ orders, items });
  }
  createItem = async ({ title, price, image }) => {
    let item = await this.crudItem.createItems({ title, price, image });
    console.log(item)
    let items = [...this.state.items, item];
    this.setState({ items });
  };
  createOrder = async ({ customer_id, details, priority, order_status }) => {
    let order = await this.crudOrder.createOrder({
      customer_id,
      details,
      priority,
      order_status
    });
    console.log("order", order);
  };
  render() {
    console.log("HERE", this.state.items.data);
    return (
      <div>
        <Header />
        <AddItem createItem={this.createItem} />
        <div style={{ display: "flex" }}>
          <AddOrder
            orders={this.state.orders}
            items={this.state.items}
            createOrder={this.createOrder}
          />
          <SearchPage />
        </div>
        <TableOrder orders={this.state.orders} {...this.props} />
      </div>
    );
  }
}

export default AdminOrder;
