import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
            <div className={s.item}>
                <NavLink to="/users">Users</NavLink>
            </div>
        <div className={s.item}>
            <NavLink>
                News
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink>
                Music
            </NavLink>
        </div>
        <div className={s.item}>
            <NavLink>
                Settings
            </NavLink>
        </div>
    </nav>
    )
}

export default NavBar;