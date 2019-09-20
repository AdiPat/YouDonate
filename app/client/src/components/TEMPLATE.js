import React from "react";
import "../css/style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class NgosComponent extends React.Component {
  render() {
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
      <div>Ngo List</div>
    );
  }
}

export default NgosComponent;
