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
      if (city == "Nan") city = "Mumbai";
      data.push(
        <ReccComponent
          name={this.props.name[j]}
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
                <h1>Here are some NGOs you'd like</h1>
                <p>Based on our amolML algorithm</p>
              </div>
              <div className="dash-recc-items">{items}</div>
            </div>
            <div className="dash-rewards">
              <h2>You have 100 coins</h2>
              <button>Click to redeem</button>
            </div>
            <div className="dash-donations">
              {["donation component", "cool"]}
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
