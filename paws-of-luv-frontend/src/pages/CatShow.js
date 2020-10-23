import React, { Component } from 'react';

import LikeButton from '../components/LikeButton.js'

import { NavLink } from 'react-router-dom'

import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
} from 'reactstrap'

import butt from '../assets/butt.png'
import likeMe from '../assets/likeMe.png'

class CatShow extends Component {
    render() {
        return (
            <>
                <div id="show-body">
                    <div id="cat-card">
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    Well hello there, my name is {this.props.cat.name}!
                            </CardTitle>
                                <CardSubtitle>
                                    I am {this.props.cat.age} years old.
                            </CardSubtitle>
                            </CardBody>
                            <img width="30%" src={butt} alt="Cat" />
                            <CardBody>
                                <CardText>
                                    I really enjoy {this.props.cat.enjoys}.
                                </CardText>
                            </CardBody>
                            <div id="love">
                                <LikeButton style={{ backgroundImg: "url(../assets/likeMe.png)" }} catId={this.props.cat.id} />
                            </div>
                            <NavLink to={'/catindex'}>
                                <p style={{ color: "black", textShadow: "1px 1px 1px black", margin: "5px" }}>Back to List</p>
                            </NavLink>
                            <NavLink to={`/catedit/${this.props.cat.id}`}>
                                <Button style={{
                                    width: "200px", backgroundColor: "#D8E2DC", color: "black"
                                }}>Edit Cat Profile</Button>
                            </NavLink>
                        </Card>
                    </div>
                </div>
            </>
        )
    }
}

export default CatShow
