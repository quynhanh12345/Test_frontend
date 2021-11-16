import React, { Component } from 'react';
import banner from '../../imgs/e-main-banner/banner.png';

class Banner extends Component {
    render() {
        return (
            <div className="header-banner">
                <img
                    src={banner}
                    alt="header"
                />
            </div>
        );
    }
}

export default Banner;