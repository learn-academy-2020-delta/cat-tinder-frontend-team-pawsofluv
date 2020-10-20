import React, { Component } from 'react';
import fourOhFour from '../assets/fourOhFour.jpeg';

class NotFound extends Component {
    render() {
        return (
            <>
                <div className="pageNotFound">
                    <div>
                        <h1>Oopsies.</h1>
                    </div>
                    <div>
                        <img src={fourOhFour} alt="404 Page Not Found" className="cat" />
                    </div>
                </div>
            </>
        )
    }
}

export default NotFound