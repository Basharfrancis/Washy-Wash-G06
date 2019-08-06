export class crud {
  /* Get Users   */

  getUsers = async () => {
    let token = localStorage.getItem("token");
    const req = await fetch("http://localhost:8000/api/v1/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const res = await req.json();
    console.log('res',res)
    return res.data;
  };

  /*                 Create User                                             */
  createUsers = async params => {
    let { first_name, last_name, middle_name, email, password, roles } = params;
    let token = localStorage.getItem("token");
    let body = {
      first_name: first_name,
      last_name: last_name,
      middle_name: middle_name,
      email: email,
      password: password,
      roles: roles
    };
    console.log(body);
    const req = await fetch("http://localhost:8000/api/v1/users", {
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
  editUser = async params => {
    let token = localStorage.getItem("token");
    let body = {
      id: params.id,
      first_name: params.first_name,
      last_name: params.last_name,
      middle_name: params.middle_name,
      email: params.email,
      password: params.password,
      roles: params.roles
    };
    console.log("=====>", body);

    const req = await fetch(`http://localhost:8000/api/v1/users/${body.id}`, {
      method: "put",
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
  /*                Delete User                             */
  deleteUser = async id => {
    let token = localStorage.getItem("token");
    const req = await fetch(`http://localhost:8000/api/v1/users/${id}`, {
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
