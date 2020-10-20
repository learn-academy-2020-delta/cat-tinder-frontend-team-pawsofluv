import React, { Component } from 'react';
import {
    Card,
    CardTitle,
    Col
} from 'reactstrap'

class CatIndex extends Component {
    render() {
    return (
        <>
            <h3>Cat Index</h3>
            <br />
            <Col sm="6">
                { this.props.cats.map ((cat, index) => {
                    return (
                        <Card key={ index }>
                            <CardTitle>
                                <h3> { cat.name } </h3>
                            </CardTitle>
                        </Card>
                    )
                })}
            </Col>
        </>
        )
    }
}

export default CatIndex