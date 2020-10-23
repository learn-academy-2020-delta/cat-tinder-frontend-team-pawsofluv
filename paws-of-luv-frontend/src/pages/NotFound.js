import React, { Component } from 'react';

import poop from '../assets/poop.png';

class NotFound extends Component {
    render() {
        return (
            <>
                <div id="errorBody">
                    <div>
                        <h1>You went the wrong way and disturbed Mr. Stinkums. <br /> You'd better turn back before he bites you.</h1>
                    </div>
                    <div>
                        <h4 style={{ fontSize: "60px" }}>404</h4>
                        <img src={poop} alt="404 Page Not Found" className="picture" />
                    </div>
                    <p style={{ color: "transparent" }}> oh </p>
                </div>
            </>
        )
    }
}

export default NotFound