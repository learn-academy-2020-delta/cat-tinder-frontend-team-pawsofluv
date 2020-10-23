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
                        <img
                            src={mittens}
                            alt="smiley Kitty"
                            className="picture"
                        />
                        <span className="namez">Mittens</span>
                    </div>
                    <div>
                        <img
                            src={raisins}
                            alt="Big Fuffy Yawn"
                            className="picture"
                        />
                        <span className="namez">Raisins</span>
                    </div>
                    <div>
                        <img
                            src={toast}
                            alt="Cat with Butterfly Friend"
                            className="picture"
                        />
                        <span className="namez">Toast</span>
                    </div>
                    <div>
                        <img
                            src={itchy}
                            alt="Give Him all the Cheese"
                            className="picture"
                        />
                        <span className="namez">Itchy</span>
                    </div>
                    <div>
                        <img
                            src={scratchy}
                            alt="Ready for his Date"
                            className="picture"
                        />
                        <span className="namez">Scratchy</span>
                    </div>
                    <div>
                        <img
                            src={bandit}
                            alt="Uhhhh...totally a cat, nothing to see here."
                            className="picture"
                        />
                        <span className="namez">Bandit</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Home