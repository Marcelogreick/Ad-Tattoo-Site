import React from 'react'

import icon from '../../assets/icon.png'

import './styles.css'

export default function Header() {
    return(
        <div className="header-container">
                <div className="logo-header">
                    <img src={icon} alt="icon" />
                    
                    <h1>
                    AD TATTOO
                    </h1>
                </div>

                <div>
                    <ul>
                        <li>Home</li>
                        <li>Estúdio</li>
                        <li>Contato</li>
                    </ul>
                </div>
        </div>
    )
}