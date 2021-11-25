import { useState, useEffect } from 'react'
import logo from '../images/logo.svg'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import MobileNav from './MobileNav'

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [showNav, setShowNav] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    })
    return (
        <header>
            <nav>
                <a href="/" className="logo">
                    <img src={logo} alt="shortly" />
                </a>

                {width <= 667 ? <MobileHeader onOpen={() => setShowNav(!showNav)}/> : <DesktopHeader />}
            </nav>
                {showNav && width <= 667 && <MobileNav />}
            
        </header>
    )
}

export default Header
