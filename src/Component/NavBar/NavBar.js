import React, { Component } from 'react';
import logo from '../../imgs/tpo/-e-logo.png';
import rectangle662 from '../../imgs/tpo/Rectangle 662.png';
class navBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark " >
                <a className="navbar-brand" href="/#"><img src={logo} alt="" /></a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">INTRODUCTION <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">SOLUTION</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">RATE PLAN <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><img src={rectangle662} alt="" /> <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">LOGIN <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#">APPLY FOR FREE USE <span className="visually-hidden">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default navBar;