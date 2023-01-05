
import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

    let navigate = useNavigate();

    const [navToggle, setnavToggle] = useState(false)

    const hamClick = () => {
        navToggle === false ? setnavToggle(true) : setnavToggle(false)
    }

    const onNavLinkClick = () => {
        setnavToggle(false);
    }

    const onNavLogOutClick = () => {
        localStorage.removeItem('id');
        navigate('/');
    }


    return (
        <div>
            <header>
                <nav className="navbar">
                    <NavLink to="/" className="nav-branding"><strong>Easy Shop</strong></NavLink>

                    <ul className={navToggle ? " nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                            < NavLink to="/" className="nav-links" onClick={onNavLinkClick} >Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to="/categories" className="nav-links" onClick={onNavLinkClick} >Categories</NavLink>
                        </li>
                        <li className="nav-item">
                            < NavLink to="/cart" className="nav-links" onClick={onNavLinkClick} >Cart</NavLink>
                        </li>
                        <li className="nav-item">
                            {
                                localStorage.getItem('id') ?
                                    < NavLink to="#" className="nav-links" onClick={onNavLogOutClick} >Logout</NavLink> :
                                    < NavLink to="/login" className="nav-links" onClick={onNavLinkClick} >Login</NavLink>
                            }
                        </li>
                    </ul>

                    <div className={navToggle ? "hamburger active" : "hamburger"} onClick={hamClick} >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>


                </nav>
            </header>
        </div>
    )
}

export default Navbar