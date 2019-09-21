import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../css/style.css";
import NgosComponent from "./NgosComponent";
import PrizesComponent from "./PrizesComponent";
import LeaderboardComponent from "./LeaderboardComponent";
import ReccComponent from "./ReccComponent";

function randInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min) + min);
}

function stripName(s) {
  let st = s.slice(0, Math.min(30, s.length));
  st = st + "...";
  return st;
}

class DashComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
  }

  getItems() {
    let data = [];
    for (let i = 0; i < 4; i++) {
      let j = randInt(0, this.props.name.length);
      let coins = randInt(100, 500);

      let city = this.props.city[i];
      let name = stripName(this.props.name[j]);
      if (city == "Nan") city = "Mumbai";
      data.push(
        <ReccComponent
          name={name}
          info={"NGO in " + city}
          coins={coins}
          img={"https://via.placeholder.com/150"}
        />
      );
    }
    return data;
  }

  render() {
    let items = this.getItems();
    return (
      <Router>
        {/* {this.renderRedirect()} */}
        <div className="dash">
          <div className="dash-left">
            <LeaderboardComponent />
          </div>
          <div className="dash-right">
            <div className="dash-recc">
              <div className="dash-recc-title">
                <h1>Here are some NGOs for you!</h1>
                <p>
                  Selected using our blockchain & Machine Learning Alorithms
                </p>
              </div>
              <div className="dash-recc-items">{items}</div>
            </div>
            <div className="dash-rewards">
              <h2>You have 100 coins</h2>
              <button className="btn-normal">
                Click to redeem <ion-icon name="arrow-round-forward"></ion-icon>
              </button>
            </div>
            <div className="dash-donations">
              {/* {["donation component", "cool"]} */}
            </div>
          </div>
        </div>
        <Route path="/prizes" component={PrizesComponent}></Route>
        <Route path="/ngos" component={NgosComponent}></Route>
      </Router>
    );
  }
}

export default DashComponent;
