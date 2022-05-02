import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav>
                <div>
                    <NavLink to='/pre-junior'>
                        Pre-Junior
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/junior'>
                        Junior
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/junior-plus'>
                        Junior-Plus
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header
