import React from 'react';

import Header from '../../components/Header'
import Card from '../../components/Card'
import CarouselBar from '../../components/CarouselBar'
import Footer from '../../components/Footer'

import djinn from '../../assets/djinn.png'
import adri from '../../assets/adri.png'
import ale from '../../assets/ale.png'

import './styles.css'

export default function Home() {
    return(

        <div className="container">
            <Header />
            <CarouselBar />

            <h1>Nossa Equipe</h1>

            <div className="line">
                <Card 
                tattoo={djinn} 
                name="Djinn" 
                type="Tatuador" 
                social="@djinntattoo"
                whats="5585987095350"
                tel="(85) 9.8709-5350"
                link="https://www.instagram.com/djinntattoo/"
                />
                <Card 
                tattoo={adri}  
                name="Adriano" 
                type="Tatuador" 
                social="@adrianosousatattoo"
                whats="5585987827752"
                tel="(85) 9.8782-7752"
                link="https://www.instagram.com/adrianosousatattoo/"
                />
                <Card 
                tattoo={ale} 
                name="Alexandre" 
                type="Body Piercing"
                social="@alexandrepiercer"
                whats="5585988924464"
                tel="(85) 9.8892-4464"
                link="https://www.instagram.com/alexandrepiercer/"
                />
            </div>

            <Footer />
        </div>
    )
};