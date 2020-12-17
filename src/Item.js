import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';


class Item extends Component {
    render() {
        let id = this.props.match.params.id;

        let item = this.props.items.find(item => item.id === id);
        if (!item) return <Redirect to={this.props.cantFind} />;

        return (
            <section>
                <Card>
                    <CardBody>
                        <CardTitle className="font-weight-bold text-center">
                            {item.name}
                        </CardTitle>
                        <CardText className="font-italic">{item.description}</CardText>
                         <p><b>Recipe:</b> {item.recipe}</p>
                         <p><b>Serve:</b> {item.serve}</p>
                    </CardBody>
                </Card>
            </section>
        );
    }
}

export default Item;