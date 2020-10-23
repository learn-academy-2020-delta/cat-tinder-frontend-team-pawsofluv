import React, { Component } from 'react';
import {
    Button,
    Col,
    Container,
    Row
} from 'reactstrap'

import { Link } from 'react-router-dom'

class CatIndex extends Component {
    render() {
        return (
            <>
                <div id="index-body">
                    <h3 className="title">Here's All Our Furry Friends!</h3>
                    <br />
                    <div id="button-set">
                      <Container fluid>
                        <Row>
                        {this.props.cats && this.props.cats.map((cat, index) => {
                            return (
                                  <Col>
                                    <Link to={`/catshow/${cat.id}`} key={index} >

                                    <Button>
                                      <br />
                                      My
                                      <br />
                                      name
                                      <br />
                                      is
                                      <br />
                                      {cat.name}.
                                    </Button>
                                    </Link>
                                  </Col>
                            )
                        })}
                        </Row>
                      </Container>
                    </div>
                </div>
            </>
        )
    }
}

export default CatIndex
