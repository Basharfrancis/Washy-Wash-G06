export class crudOrder {
  /* Get Users   */

  getOrders = async () => {
    let token = localStorage.getItem("token");
    const req = await fetch("http://localhost:8000/api/v1/orders", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const res = await req.json();

    return res;
  };

  /*                 Create User                                             */
  createOrder = async params => {
    let { customer_id, details, priority, order_status } = params;
    let token = localStorage.getItem("token");
    let body = {
      customer_id: customer_id,
      details: details,
      priority: priority,
      order_status: order_status
    };
    console.log("boooody===>", body);
    const req = await fetch("http://localhost:8000/api/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const res = await req.json();
    console.log("=====res===>", res);
    return res;
  };

  /*                 Edit User                                           */
  editOrder = async params => {
    let token = localStorage.getItem("token");
    let body = {
      customer_id: params.customer_id,
      details: params.details,
      priority: params.priority,
      order_status: params.order_status
    };
    console.log("=====>", body);

    const req = await fetch(
      `http://localhost:8000/api/v1/orders/${body.customer_id}`,
      {
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body
      }
    );
    const res = await req.json();

    return res;
  };
  /*                Delete User                             */
  deleteUser = async id => {
    let token = localStorage.getItem("token");
    const req = await fetch(`http://localhost:8000/api/v1/orders/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const res = await req.json();
    return res;
  };
}
