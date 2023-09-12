// -----------------------------------------------------------------
import React, { useState } from 'react';
import logo from './img/mono.svg';

function Navbar() {

    const [action, setAction] = useState(false);

    const handleClick = () => {
        setAction(!action);
    };

    return (

        <nav>
            <div className='cabeza'>
                <a href='index.html'>
                    <img src={logo} alt="logo" className="logo" />
                </a>
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
                    <li><a className='active' href='index.html'>Home</a></li>
                    <li><a href='about.html'>About</a></li>
                    <li><a href='contact.html'>Projects</a></li>
                    <li><a href='contact.html'>Contact</a></li>
                    <li><a href='contact.html'>Resume</a></li>
                </ul>
            </div>



        </nav>

    );
};

export default Navbar;