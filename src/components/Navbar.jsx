// -----------------------------------------------------------------
import React, { useState } from 'react';
import logo from './img/mono.svg';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const [action, setAction] = useState(false);

    const handleClick = () => {
        setAction(!action);
    };

    return (

        <nav>
            <div className='cabeza'>
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <h1>okamixdev</h1>
                <div id='hamburger'>
                    <i id='ham'
                        onClick={handleClick}
                        className={action ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
            </div>



            <div>
                <ul
                    className={action ? 'nav-bar active' : 'nav-bar'}
                    onClick={handleClick}>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : "unactive"} to="/"><i class="fa-solid fa-house"></i></NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : "unactive"} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : "unactive"} to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? "active" : "unactive"} to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>



        </nav>

    );
};

export default Navbar;