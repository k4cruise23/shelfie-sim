import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return(
        <div>
        <h1>Shelfie</h1>
        <div className="buttons">
            <Link to='/'>Dashboard</Link>
            <Link to='/form'>Add Inventory</Link>
        </div>
        </div>
    )
}

export default Header