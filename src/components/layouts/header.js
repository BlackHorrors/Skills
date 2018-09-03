import React from 'react'

import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <ul className="header-list">
                <li className="list-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="list-item">
                    <Link to="/createdir">Direction</Link>
                </li>
                <li className="list-item">
                    <Link to="/createskills">Skills</Link>
                </li>
            </ul>
        </div>
    )
}
    export default Header
