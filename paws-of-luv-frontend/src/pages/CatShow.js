import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    CardText,
    Col
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

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
                    <NavLink to={ '/catindex' }>
                        Back to List
                    </NavLink>
                </Card>
            </Col>
        </>
        )
    }
}

export default CatShow