import React, { Component } from 'react';
import test2 from '../assets/test2.png';

class NotFound extends Component {
    render() {
        return (
            <>
                <h1>Oopsies.</h1>
                <img src="../assets/test2.png" alt="404 Page Not Found" className="cat" />
            </>
        )
    }
}

export default NotFound