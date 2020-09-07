import React from 'react'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'

import './styles.css'

export default function Card({tattoo, name, type, social, whats, tel, link}) {
    return(
        <div className="card">
            <img src={tattoo} alt="card" />
            <h1>{name}</h1>
            <p>{type}</p>
            <div className="social">
                <a href={link}>
                    <img src={instagram} />
                    <p>{social}</p>
                </a>

                <a href={`https://api.whatsapp.com/send?phone=${whats}`}>
                    <img src={whatsapp} />
                    <p>{tel}</p>
                </a>
            </div>
            <div className="button-container">
                <button type="button">
                    Clique Aqui
                </button>
            </div>
        </div>
    )
}