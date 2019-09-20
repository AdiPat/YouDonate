import React from "react";
import "../css/style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LeaderboardComponent from "./LeaderboardComponent";

class PrizesComponent extends React.Component {
  render() {
    return (
      <div className="ngos">
        <div className="ngos-left">
          <LeaderboardComponent />
        </div>
        <div className="ngos-right">List of Prizes rendered here.</div>
      </div>
    );
  }
}

export default PrizesComponent;
