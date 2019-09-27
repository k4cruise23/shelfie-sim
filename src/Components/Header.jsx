import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <h2>SHELFIE</h2>
                <div >
                    <Link to="/" className='nav-buttons'><span>Dashboard</span></Link>
                    <Link to='/add' className='nav-buttons'>
                    <span>Add Inventory</span>
                    </Link>
                </div>
            </div>
        )
    }
}