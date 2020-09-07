import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../assets/slide1.png'
import slide2 from '../../assets/slide2.png'
import slide3 from '../../assets/slide3.png'
import slide4 from '../../assets/slide4.png'
import slide5 from '../../assets/slide5.png'

import './styles.css'
 
export default function CarouselBar() {
        return (
            <Carousel 
            showThumbs={false}
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
            interval={2000}
            transitionTime={120}
            className="CarouselBar"
            centerSlidePercentage={80}
            >
                <div className="slide">
                    <img src={slide2} alt="logo" />
                </div>
                <div>
                    <img src={slide3} alt="logo" />
                </div>
                <div>
                    <img src={slide1} alt="logo" />
                </div>
                <div>
                    <img src={slide4} alt="logo" />
                </div>
                <div>
                    <img src={slide5} alt="logo" />
                </div>
            </Carousel>
        );
    }