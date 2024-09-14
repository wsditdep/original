"use client";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import img1 from "@/public/slider/img1.png";
import img2 from "@/public/slider/img2.jpg";
import img3 from "@/public/slider/img3.png";
import img4 from "@/public/slider/img4.png";

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}

const slideImages = [
    {
        url: img1,
    },
    {
        url: img2,
    },
    {
        url: img3,
    },
    {
        url: img4,
    },
];

const Slider = () => {
    return (
        <Slide>
            {slideImages.map((slideImage, index) => (
                <div key={index}>
                    <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url.src})` }}>
                    </div>
                </div>
            ))}
        </Slide>
    )
}

export default Slider