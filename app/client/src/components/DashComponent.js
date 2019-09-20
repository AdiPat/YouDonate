import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "../css/style.css";
import NgosComponent from "./NgosComponent";
import PrizesComponent from "./PrizesComponent";
import LeaderboardComponent from "./LeaderboardComponent";
import ReccComponent from "./ReccComponent";

class DashComponent extends React.Component {
  render() {
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
              <div className="dash-recc-items">
                <ReccComponent
                  name="Asha"
                  info="Girls NGO in Mumbai"
                  coins={150}
                  img={"https://via.placeholder.com/150"}
                />
                <ReccComponent
                  name="Usha"
                  info="Boys NGO in Mumbai"
                  coins={120}
                  img={"https://via.placeholder.com/150"}
                />
              </div>
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
