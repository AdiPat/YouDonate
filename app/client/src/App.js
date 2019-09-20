import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import DashComponent from "./components/DashComponent";
import LeaderboardComponent from "./components/LeaderboardComponent";
import HeaderComponent from "./components/HeaderComponent";
import NgosComponent from "./components/NgosComponent";
import PrizesComponent from "./components/PrizesComponent";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loggedIn: false
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentWillMount() {
    // if (this.state.loggedIn) {
    //   window.location.href = "/dash";
    // } else {
    //   window.location.href = "/login";
    // }
  }

  componentDidMount() {
    // if (this.state.loggedIn) {
    //   window.location.href = "/dash";
    // } else {
    //   window.location.href = "/login";
    // }
  }

  renderRedirect() {
    let component = "/login";
    if (this.loggedIn) {
      component = "/dash";
    }
    return <Redirect to={component} />;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />

          {/* {this.renderRedirect()} */}
          <div>
            <Link to="/login">Login</Link>
            <Link to="/dash">Dash</Link>
            <Link to="/ngos">Ngos</Link>
            <Link to="/prizes">Prizes</Link>
          </div>
          <Route path="/login" component={LoginComponent}></Route>
          <Route path="/dash" component={DashComponent}></Route>
          <Route path="/ngos" component={NgosComponent}></Route>
          <Route path="/prizes" component={PrizesComponent}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
