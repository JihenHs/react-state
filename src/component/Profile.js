import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      
      countshow: 0,
      
    };
  }

  render() {
    
      return (
        <div className="App">
          <div className="header-app">
            <Card style={{ width: "30rem" }}>
              <Card.Img
                variant="top"
                src={this.props.imgUrl}
                alt="profilephoto"
              />
              <Card.Body>
                <Card.Title>
                  <h1 style={{ color: "blue" }}>{this.props.fullName}</h1>
                </Card.Title>
                <Card.Text>
                  <h5>{this.props.profession}</h5>
                  <h5>{this.props.bio}</h5>
                  <h5 style={{ color: "red" }}>
                    Mounted since: {this.state.countshow} s
                  </h5>
                </Card.Text>
                <Button variant="primary" onClick={this.props.click}>
                  {this.props.hide ? "Show" : "Hide"}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    }
  
    componentDidMount() {
      console.log("did mount");
      if (!this.props.hide) {
        setInterval(() => {
          this.setState({ countshow: this.state.countshow + 1 });
        }, 1000);
      }
    }

}
