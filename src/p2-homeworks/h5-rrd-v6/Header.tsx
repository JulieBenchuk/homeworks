import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.block_header}>
            <nav>
                <div>
                    <NavLink to='/pre-junior' className={s.navlink}>
                        Pre-Junior
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/junior' className={s.navlink}>
                        Junior
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/junior-plus' className={s.navlink}>
                        Junior-Plus
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header
