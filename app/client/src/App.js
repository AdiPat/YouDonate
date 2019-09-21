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
      loggedIn: false,
      ngo_name: [],
      ngo_city: [],
      ngo_state: [],
      ngo_cause: []
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.setNgoInApp = this.setNgoInApp.bind(this);
  }

  setNgoInApp(data) {
    let curData = [];
    this.setState({
      ngo_name: data.map(val => val[1]),
      ngo_city: data.map(val => val[2]),
      ngo_state: data.map(val => val[3]),
      ngo_cause: data.map(val => val[4])
    });
    console.log("App", this.state.ngos);
  }

  componentWillMount() {}

  componentDidMount() {
    this.getAPIData()
      .then(res => {
        let data = res.data;
        this.setNgoInApp(data);
      })
      .catch(err => console.log(err));
  }

  async getAPIData() {
    let response = await fetch("http://localhost:5000/ngos");
    let data = await response.json();
    if (response.status !== 200) {
      console.log("PrizesComponent: Failed to fetch prizes");
    }
    return data;
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
          {/* <HeaderComponent /> */}

          {/* {this.renderRedirect()} */}
          <div class="app-header">
            <Link to="/login">Login</Link>
            <Link to="/dash">Dash</Link>
            <Link to="/ngos">Ngos</Link>
            <Link to="/prizes">Prizes</Link>
          </div>
          <Route path="/login" component={LoginComponent}></Route>
          <Route
            path="/dash"
            component={() => (
              <DashComponent
                name={this.state.ngo_name}
                city={this.state.ngo_city}
                state={this.state.ngo_state}
                cause={this.state.ngo_cause}
              />
            )}
          ></Route>
          <Route path="/ngos" component={NgosComponent}></Route>
          <Route path="/prizes" component={PrizesComponent}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
