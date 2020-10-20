import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Col
} from 'reactstrap'

class CatShow extends Component {
    render() {
    return (
        <>
            <h3>Cat Show</h3>
            <Col sm="6">
                <Card>
                    <CardTitle>
                        { this.props.cat.name }
                    </CardTitle>
                    <CardText>
                        Hello, I am { this.props.cat.age } years old. I love { this.props.cat.enjoys }.
                    </CardText>
                </Card>
            </Col>
        </>
        )
    }
}

export default CatShow