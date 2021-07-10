import React from 'react'
import logo from './transparent.PNG'

function Header() {
    return (
        <div className="header">
            <a href="/"><img className="logo" src={logo} alt="logo" width="500" height="333"/></a>
            <nav>
                <navbar>
                    <a className="navlink" href="/about">About </a> ~
                    <a className="navlink" href="/shop"> Shop </a> ~
                    <a className="navlink" href="/media"> Media</a>
                </navbar>
            </nav>
            
        </div>
    )
}

export default Header