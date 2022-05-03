import React from 'react'
import {NavLink} from 'react-router-dom'
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <ul className={s.menu}>
                <li>
                    <label className={s.level}>LEVEL</label>
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
