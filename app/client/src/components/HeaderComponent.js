import React from "react";
import "../css/style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class HeaderComponent extends React.Component {
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
      <div className="header">
        <div className="header-home">Home</div>
        <div className="header-search">
          <input type="text" placeholder="Search by name,cause,area"></input>
        </div>
        <div className="header-ngos">NGOs</div>
        <div className="header-logout">Logout</div>
      </div>
    );
  }
}

export default HeaderComponent;
