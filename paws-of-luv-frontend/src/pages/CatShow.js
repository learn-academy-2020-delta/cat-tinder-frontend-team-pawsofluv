import React, { Component } from 'react';

import LikeButton from '../components/LikeButton.js'

import {
    Button,
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
                            {this.props.cat.name}
                        </CardTitle>
                        <CardText>
                            Hello, I am {this.props.cat.age} years old. I love {this.props.cat.enjoys}.
                    </CardText>
                        <LikeButton catId={this.props.cat.id} />
                        <NavLink to={'/catindex'}>
                            Back to List
                        </NavLink>
                        <NavLink to={`/catedit/${this.props.cat.id}`}>
                            <Button>Edit Cat Profile</Button>
                        </NavLink>
                    </Card>
                </Col>
            </>
        )
    }
}

export default CatShow
