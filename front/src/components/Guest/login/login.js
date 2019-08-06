import React ,{ Component } from 'react';
import "./logim.css";

class Login extends Component {


  

  render() {
    
    return (
      <div>

<div classname="&quot;Foorm">
  <h2>Modal Login Form</h2>
  <button onclick="document.getElementById('id01').style.display='block'" style={{width: 'auto'}}>Login</button>
  <div id="id01" className="modal">
    <form className="modal-content animate" action="/action_page.php">
      <div className="imgcontainer">
        <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">×</span>
        <img src="img_avatar2.png" alt="Avatar" className="avatar" />
      </div>
      <div className="container">
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me
        </label>
      </div>
      <div className="container" style={{backgroundColor: '#f1f1f1'}}>
        <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
</div>

</div>

      
    )
  }
}

export default Login;