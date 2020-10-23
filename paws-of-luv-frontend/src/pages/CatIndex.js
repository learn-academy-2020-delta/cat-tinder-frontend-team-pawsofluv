import React, { Component } from 'react';
import {
    Button
} from 'reactstrap'

// import { NavLink } from 'react-router-dom'

class CatIndex extends Component {
    render() {
        return (
            <>
                <div id="index-body">
                    <h3 className="title">Here's All Our Furry Friends!</h3>
                    <br />
                    <div id="button-set">
                        {this.props.cats.map((cat, index) => {
                            return (
                                <Button key={index} href={`/catshow/${cat.id}`}>
                                    <br />
                                    My
                                    <br />
                                    name
                                    <br />
                                    is
                                    <br />
                                    {cat.name}.
                                </Button>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default CatIndex
