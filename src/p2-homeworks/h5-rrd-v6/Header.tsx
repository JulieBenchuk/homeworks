import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <ul className={s.menu}>
                <li>
                    <span className={s.level}>LEVEL</span>
                    <ul>
                        <li>
                            <NavLink to='/pre-junior'>
                                Pre-Junior
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/junior'>
                                Junior
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/junior-plus'>
                                Junior-Plus
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Header
