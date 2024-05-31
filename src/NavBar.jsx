import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoBig from './logo.jpg'
//nav bar
// TODO: Refractor for code maintainability
export const NavBar = () => {
// usestate for mobile menu:
// false: not open
// true: opened
const [isOpenMenu, setOpenedMenu] = useState(false);

// menu handlers
const handleOpen = () => {
    setOpenedMenu(true);
}

const handleClose = () => {
    setOpenedMenu(false);
}

// usestates for window size
const [winWidth, setWinWidth] = useState(window.innerWidth);

// use effect for window sizing
// called per runtime
useEffect (() => {
    // create new function to set width
    function handleWindowWidth () {
        setWinWidth(window.innerWidth);
    }
    // add event listener to window to detect resizing
    window.addEventListener('resize', handleWindowWidth);
}, []);

// condition to close menu when width > 700
useEffect (() => {
    if (winWidth > 700) {
    console.log(winWidth);
    handleClose();
    }
})

//navibar return
return (
    <>
    <nav className='nav'>
        <div className='nav-container'>
        <img className='logo' src={logoBig} alt='logo' height='100px' width='200px'></img>
        { isOpenMenu

        ? <svg className='menu-icon' onClick={ handleClose } width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"/>
        </svg>

        : <svg className='menu-icon' onClick={ handleOpen } width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <path fill="#000000" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
        </svg>
        }

        <ul className={`links ${isOpenMenu ? "is-open" : ""}`}>
        <li>
            <Link to="/"> Home </Link>
        </li>
        <li>
            <Link to="/portfolio"> Our Portfolio </Link>
        </li>
        <li>
            <Link to="/contact-us"> Contact Us Now! </Link>
        </li>
        </ul>
        </div>
    </nav>
    </>
);
}
