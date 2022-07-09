import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button';

import './Navbar.styles.css'

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className='navbar'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap"></link>
                <div className='navbar-container'>
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <span class='icon'></span>  

                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/whyca" className="nav-links" onClick={closeMobileMenu}>
                                Why CA?
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/impetus" 
                                className="nav-links" 
                                onClick={closeMobileMenu}
                            >
                                Impetus
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                to="/sign-up" 
                                className="nav-links-mobile" 
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button 
                    buttonStyle='btn--outline'>REGISTER</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar