export class crudItem {
  /* Get Users   */

  getItems = async () => {
    let token = localStorage.getItem("token");
    const req = await fetch("http://localhost:8000/api/v1/items-types", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const res = await req.json();
    console.log("=====>", res);
    return res;
  };

  /*                 Create User                                             */
  createItems = async params => {
    let { title, price, image } = params;
    let token = localStorage.getItem("token");
    let body = {
      title: title,
      price: price,
      image: image
    };
    console.log(body);
    const req = await fetch("http://localhost:8000/api/v1/items-types", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const res = await req.json();
    return res;
  };

  /*                 Edit User                                           */
  editItems = async params => {
    let token = localStorage.getItem("token");
    let { title, price } = params;
    let body = {
      id: params.id,
      title: title,
      price: price
    };
    console.log("=====>", body);

    const req = await fetch(
      `http://localhost:8000/api/v1/items-types/${body.id}`,
      {
        method: "put",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );
    const res = await req.json();

    return res;
  };
  /*                Delete User                             */
  deleteItem = async id => {
    let token = localStorage.getItem("token");
    const req = await fetch(`http://localhost:8000/api/v1/items-types/${id}`, {
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
