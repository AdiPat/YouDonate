import React from "react";
import "../css/style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LeaderboardComponent from "./LeaderboardComponent";

const ListItem = props => {
  return (
    <div className="prizes-item">
      <div className="prizes-item-left">
        <img src="https://via.placeholder.com/80"></img>
      </div>
      <div className="prizes-item-right">
        <h3>{props.title}</h3>
        <h4>
          Coins:&nbsp;<span>{props.coins}</span>
        </h4>
        <button>Redeem</button>
      </div>
    </div>
  );
};

class PrizesComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      cost: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAPIData = this.getAPIData.bind(this);
    this.getListItems = this.getListItems.bind(this);
  }

  componentDidMount() {
    this.getAPIData()
      .then(res => {
        let data = res.data;
        //console.log(data);
        this.setState({
          items: data.prizes.map(v => v[0]),
          cost: data.prizes.map(v => v[1])
        });
      })
      .catch(err => console.log(err));
  }

  async getAPIData() {
    let response = await fetch("http://localhost:5000/prizes");
    let data = await response.json();
    if (response.status !== 200) {
      console.log("PrizesComponent: Failed to fetch prizes");
    }
    return data;
  }

  getListItems() {
    let items = [];
    for (let i = 0; i < this.state.items.length; i++) {
      items.push(
        <ListItem title={this.state.items[i]} coins={this.state.cost[i]} />
      );
    }
    return items;
  }

  render() {
    let items = this.getListItems();

    return (
      <div className="prizes">
        <div className="prizes-left">
          <LeaderboardComponent />
        </div>
        <div className="prizes-right">{items}</div>
      </div>
    );
  }
}

export default PrizesComponent;
