// -----------------------------------------------------------------
import React, { useState } from 'react';
import logo from './img/mono.svg';
import { Link } from 'react-router-dom';

function Navbar() {

    const [action, setAction] = useState(false);

    const handleClick = () => {
        setAction(!action);
    };

    return (

        <nav>
            <div className='cabeza'>
                <Link to = "/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <h1>Portfolio</h1>
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
                    <li><Link to = "/" className='active' >Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/projects">Projects</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                </ul>
            </div>



        </nav>

    );
};

export default Navbar;