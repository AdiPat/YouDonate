import React from "react";
import "../css/style.css";

/**
 * TODO
 * - Bind inputs to state.
 * - Check credentials in API.
 * - Redirect on correct credentials.
 */
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      type: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log("LoginComponent: Submit Pressed.");
  }

  render() {
    return (
      <div className="login">
        <div className="login-header">
          <h1 className="login-header-title">Login</h1>
          <p className="login-header-subtitle">Welcome to YouDonate!</p>
        </div>
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-element">
            <label>Username</label>
            <input type="text" placeholder="johndoe"></input>
          </div>
          <div className="form-element">
            <label>Password</label>
            <input type="text"></input>
          </div>
          <div className="form-element">
            <label>User</label>
            <input type="radio" name="gender" value="male" checked />
            <label>NGO</label>
            <input type="radio" name="gender" value="female" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
