import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

class Home extends Component {
  render() {
    let { snacks, drinks } = this.props;

  return (
    <section className="col-md-8">
      <Card>
      <CardTitle>
        <CardBody className="text-center">
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          <CardText>
            Our menu includes {snacks.length} snacks and {drinks.length} drinks.
          </CardText>
        </CardBody>
        </CardTitle>
      </Card>
    </section>
    );
  }
}
export default Home;
