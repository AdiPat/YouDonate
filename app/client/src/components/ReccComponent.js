import React from "react";
import "../css/style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class ReccComponent extends React.Component {
  render() {
    return (
      <div className="item-recc">
        <div className="item-recc-header">
          <h1>{this.props.name}</h1>
          <img src={this.props.img} alt="placeholder"></img>
        </div>
        <div className="item-recc-body">
          <p>{this.props.info}</p>
          <h3>Coins:&nbsp;{this.props.coins}</h3>
          <button className="btn-dark">Donate</button>
        </div>
      </div>
    );
  }
}

export default ReccComponent;
