import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='{styles.header}'>
        <nav className='{styles.nav}'>
            <ul className='{styles.navList}'>
                <li className='{styles.navItem}'>
                    <Link to='/' className='{styles.navLink}'prefetch={true.toString()}>Home</Link>
                </li>
                <li className='{styles.navItem}'>
                    <Link to='/portfolio' className='{styles.navLink}' prefetch={true.toString()}>Portfolio</Link>
                </li>
                <li className='{styles.navItem}'>
                    <Link to='/about' className='{styles.navLink}' prefetch={true.toString()}>About</Link>
                </li>
                <li className='{styles.navItem}'>
                    <Link to='/services' className='{styles.navLink}' prefetch={true.toString()}>Services</Link>
                </li>
                <li className='{styles.navItem}'>
                    <Link to='/contact' className='{styles.navLink}'prefetch={true.toString()}>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header