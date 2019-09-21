import React from "react";
import "../css/style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import LeaderboardComponent from "./LeaderboardComponent";

const ListItem = props => {
  return (
    <div className="prizes-item">
      <div className="prizes-item-left">
        <img src="https://via.placeholder.com/100"></img>
      </div>
      <div className="prizes-item-right">
        <h3>{props.name}</h3>
        <p>
          {props.city}, {props.state}
        </p>
        <p>{props.cause}</p>
        <button className="btn-normal">Donate</button>
      </div>
    </div>
  );
};

class NgoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      city: [],
      state: [],
      cause: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAPIData = this.getAPIData.bind(this);
    this.getListItems = this.getListItems.bind(this);
  }

  ListItem = props => {
    return (
      <div className="ngos-item">
        <div className="ngos-item-left">
          <img src="https://via.placeholder.com/100"></img>
        </div>
        <div className="ngos-item-right">
          <h3>{props.title}</h3>
          <h4>
            Coins:&nbsp;<span>{props.coins}</span>
          </h4>
          <button>Redeem</button>
        </div>
      </div>
    );
  };

  componentDidMount() {
    this.getAPIData()
      .then(res => {
        let data = res.data;
        console.log("Ngo", data);
        this.setState({
          name: data.map(v => v[1]),
          city: data.map(v => v[2]),
          state: data.map(v => v[3]),
          cause: data.map(v => v[4])
        });
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

  getListItems() {
    let items = [];
    for (let i = 0; i < Math.min(this.state.name.length, 12); i++) {
      items.push(
        <ListItem
          name={this.state.name[i]}
          city={this.state.city[i]}
          state={this.state.state[i]}
          cause={null}
        />
      );
    }
    return items;
  }

  render() {
    let items = this.getListItems();

    return (
      <div className="ngos">
        <div className="ngos-left">
          <LeaderboardComponent />
        </div>
        <div className="ngos-right">{items}</div>
      </div>
    );
  }
}

export default NgoComponent;
