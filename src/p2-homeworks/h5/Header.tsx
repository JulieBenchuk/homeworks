import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            // add NavLinks
            <nav>
                <NavLink to='/pre-junior'>
                    Pre-Junior
                </NavLink>
                <NavLink to='/pre-junior'>
                    Junior
                </NavLink>
                <NavLink to='/pre-junior'>
                    Junior-Plus
                </NavLink>
            </nav>

        </div>
    )
}

export default Header
