import React, { Component } from 'react';
import introduction from '../../imgs/introduction/box.png';

class Introduction extends Component {
    render() {
        return (
            <div >
                <div className="intro">
                    <div className="intro-img">
                        <img src={introduction} alt="intro_bg" />
                    </div>
                    <div className="intro-text">
                        <span className="font-h2">WHAT HAPPENED!</span>
                        <span className="Montserrat">
                            How to create mobile-optimized videos in minutes. Not a designer,
                            every team makes a lot of videos Can be trimmed. Take the first
                            step to your brand's success. How to create mobile-optimized
                            videos in minutes.
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;
