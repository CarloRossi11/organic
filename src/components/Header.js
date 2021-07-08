import React from 'react'
import logo from './transparent.PNG'

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" width="500" height="333"/>
            <nav>
                <navbar>
                    <a>contact </a>
                    <a> ~ shop </a>
                    <a> ~ media</a>
                </navbar>
            </nav>
            
        </div>
    )
}

export default Header