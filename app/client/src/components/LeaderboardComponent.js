import React from "react";
import "../css/style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

const ListItem = props => {
  return (
    <div className="leaderboard-item">
      <div className="l-item">{props.username}</div>
      <div className="l-title">{props.rank}</div>
    </div>
  );
};

class LeaderboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getAPIData = this.getAPIData.bind(this);
    this.getListItems = this.getListItems.bind(this);
  }

  componentDidMount() {
    this.getAPIData()
      .then(res => {
        let data = res.data;
        console.log("Ngo", data);
        this.setState({
          board: data
        });
      })
      .catch(err => console.log(err));
  }

  async getAPIData() {
    let response = await fetch("http://localhost:5000/leaderboard");
    let data = await response.json();
    if (response.status !== 200) {
      console.log("Failed to fetch leaderboard");
    }
    return data;
  }

  getListItems() {
    let items = [];
    for (let i = 0; i < this.state.board.length; i++) {
      items.push(<ListItem username={this.state.board[i]} rank={i + 1} />);
    }
    return items;
  }

  render() {
    let items = this.getListItems();
    return (
      // <Router>
      //   {/* {this.renderRedirect()} */}
      //   <div>
      //     <Link to="/prizes">Prizes</Link>
      //     <Link to="/ngos">NGOs</Link>
      //   </div>
      //   <Route path="/prizes" component={PrizesComponent}></Route>
      //   <Route path="/ngos" component={NgosComponent}></Route>
      // </Router>
      <div className="leaderboard">
        <h1>Leaderboard</h1>
        <div className="leaderboard-items">{items}</div>
      </div>
    );
  }
}

export default LeaderboardComponent;
