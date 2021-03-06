import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './CustomCarousel.css';

export const CustomCarousel = ({}) => {
    return (
        <>
            <Carousel showThumbs={false} showStatus={false} autoPlay={true} swipeable={true} infiniteLoop={true} dynamicHeight={true} interval={2000}>
                <div>
                    <img className="carousel_img" src="data:image/jpeg;base64,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" />
                    <button className="legend">Know More</button>
                </div>
                <div>
                    <img className="carousel_img" src="https://miro.medium.com/max/3840/1*C1EU92t1NUdsFh3WxkRw5g.jpeg" />
                    <button className="legend">Meet Chefs</button>
                </div>
                <div>
                    <img className="carousel_img" src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" />
                    <button className="legend">Explore Now</button>
                </div>
            </Carousel>
        </>
    );
};
