import React, { Component } from 'react';
import pawPrint from '../assets/pawPrint.png';
import catFly from '../assets/catFly.jpg';

class Home extends Component {
    render() {
        return (
            <>
                <div className="homeBackground">
                    <div className="titleOne">
                        <img src={pawPrint} alt="Paws of Luv" className="logoOne" />
                        <h1>Paws of Luv</h1>
                        <img src={pawPrint} alt="Paws of Luv" className="logoTwo" />
                    </div>
                    <br />
                    <img src={catFly} alt="Paws of Luv" className="picOne" />
                    <p className="kitty">Here are some Kitty's</p>
                </div>
            </>
        )
    }
}

export default Home