import React from 'react'
import './Navbar.css'

const NavbarHoverComponent = ({ isHovering }: any) => {


    return (<>
        {isHovering && (
            <div className={`nav--hovered--container `}>
                <h2>Only visible when hovering div</h2>
                <h2>bobbyhadz.com</h2>
            </div>
        )}
    </>
    )
}

export default NavbarHoverComponent