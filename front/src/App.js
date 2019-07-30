import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

// import Footer from './components/Guest/Footer/footer';
// import Login from './components/Guest/login/login';
// import Addorder from './components/Admin/manage order/add-order'
import NavbarPage from "./components/Admin/nav/nav";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Footer /> */}
          {/* <Login /> */}

          <NavbarPage />
          {/* <Addorder /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
