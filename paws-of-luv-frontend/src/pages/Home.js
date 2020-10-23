import React, { Component } from 'react';
import mittens from '../assets/mittens.jpg';
import raisins from '../assets/raisins.jpg';
import toast from '../assets/toast.jpg';
import itchy from '../assets/itchy.jpg';
import scratchy from '../assets/scratchy.jpg';
import bandit from '../assets/bandit.jpg';

class Home extends Component {
    render() {
        return (
            <>
                <div id="home-body">
                    <div>
                        <img src={mittens} alt="smiley Kitty" className="cat" />
                        <span className="namez">Mittens</span>
                    </div>
                    <div>
                        <img src={raisins} alt="smiley Kitty" className="cat" />
                        <span className="namez">Raisins</span>
                    </div>
                    <div>
                        <img src={toast} alt="smiley Kitty" className="cat" />
                        <span className="namez">Toast</span>
                    </div>
                    <div>
                        <img src={itchy} alt="smiley Kitty" className="cat" />
                        <span className="namez">Itchy</span>
                    </div>
                    <div>
                        <img src={scratchy} alt="smiley Kitty" className="cat" />
                        <span className="namez">Scratchy</span>
                    </div>
                    <div>
                        <img src={bandit} alt="smiley Kitty" className="cat" />
                        <span className="namez">Bandit</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Home