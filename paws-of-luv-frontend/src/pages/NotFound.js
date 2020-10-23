import React, { Component } from 'react';
import poop from '../assets/poop.png';

class NotFound extends Component {
    render() {
        return (
            <>
                <div id="not-found-body">
                    <div>
                        <h1>You went the wrong way and disturbed Mr. Stinkums. <br /> You'd better turn back before he bites you.</h1>
                    </div>
                    <div>
                        <img src={poop} alt="404 Page Not Found" className="cat" />
                    </div>
                    <p style={{ color: "transparent" }}> oh </p>
                </div>
            </>
        )
    }
}

export default NotFound