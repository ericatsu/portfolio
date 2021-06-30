import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Styles/NavBar.css';
import brand from '../assets/brand.png';


const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [ScreenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 800) {
            setOpen(true)
        }
    };

    const handleClose = () => {
        if (ScreenWidth < 800) {
            setOpen(false);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth)
    }, []); 

    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                <Link to="/">
                    <img
                      src={brand}
                      alt="Home"
                    />
                </Link>
            </div>
            
            <div className="list-wrapper">
                <img
                    src="#my-logo"
                    alt="Menu bars" style={{ opacity: !open ? 1 : 0}}
                    onClick={() => {
                        setOpen(!open);
                    }}
                />
                <img
                    src="#my-logo"
                        alt="Menu Cross" style={{ opacity: open ? 1 : 0 }}
                        onClick={() => {
                            setOpen(!open);
                        }}
                />
                <ul style={{ left: open ? "0" : "-100vw"}}>
                    <li>
                        <Link onClick={handleClose} to="/"
                        style={{color: location.pathname === "/" && "#4071f4"}}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClose} to="/About"
                            style={{ color: location.pathname === "/About" && "#4071f4" }}
                            >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClose} to="/Skills"
                            style={{ color: location.pathname === "/Skills" && "#4071f4" }}
                            >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleClose} to="/Works"
                            style={{ color: location.pathname === "/Works" && "#4071f4" }}
                            >
                            Works
                        </Link>
                    </li>
                        <li>
                            <Link onClick={handleClose} to="/Contact"
                            style={{ color: location.pathname === "/Contact" && "#4071f4" }}
                            >
                                Contact
                            </Link>
                        </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
