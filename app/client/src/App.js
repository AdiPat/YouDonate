import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.callBackendAPI = this.callBackendAPI.bind(this);
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

  async callBackendAPI() {
    let response = await fetch("/express_backend");
    let body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  render() {
    return <div className="App">{this.state.data}</div>;
  }
}

export default App;
