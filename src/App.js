import "./App.css";
import React, { Component } from "react";
import Profile from "./component/Profile";
import { Button, Alert, Card } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "Hasnaoui Jihen",
      bio: "Data Scientist + Web developer",
      profession: "Developer",
      imgUrl:
        "https://www.creativefabrica.com/wp-content/uploads/2020/12/09/1607500149/Girl-coder.jpg",
      hide: false,
      
    };
    this.handleClick = () => {
      this.setState({ hide: !this.state.hide });
    };
  }
  render() {
    if (this.state.hide) {
      return (
        <div className="app">
          <div className="header-app">
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                <>
                  <Alert key="danger" variant="danger">
                    Hidden!
                  </Alert>
                </>
              </Card.Body>
              <Button variant="primary" onClick={this.handleClick}>
                {this.state.hide ? "Show" : "Hide"}
              </Button>
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <Profile
          {...this.state}
          click={this.handleClick}
          changeCounter={this.setState}
        />
      );
    }
  }
}

export default App;
