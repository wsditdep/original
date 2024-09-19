"use client"


import Image from "next/image"
import Popup from "reactjs-popup";
import logo from "@/public/originaltravel_image/OriginalTravel-Logo-01.png";
import back from "@/public/originaltravel_image/welcome_main.png";
import carbon from "@/public/originaltravel_image/carbon.png";
import destination from "@/public/originaltravel_image/destination.png";
import hotel from "@/public/originaltravel_image/hotel_lamp2.png";
import auto from "@/public/originaltravel_image/auto.png";

// import welcome1 from "@/public/originaltravel_image/welcome1.png";
// import welcome2 from "@/public/originaltravel_image/welcome2.png";
// import welcome3 from "@/public/originaltravel_image/welcome3.png";
import welcome4 from "@/public/originaltravel_image/welcome4.png";
import welcome5 from "@/public/originaltravel_image/welcome5.png";
import welcome6 from "@/public/originaltravel_image/welcome6.png";
import welcome7 from "@/public/originaltravel_image/welcome7.png";
import welcome8 from "@/public/originaltravel_image/welcome8.png";
import welcome9 from "@/public/originaltravel_image/welcome9.png";
import welcome10 from "@/public/originaltravel_image/welcome10.png";
import welcome11 from "@/public/originaltravel_image/welcome11.png";
import welcome12 from "@/public/originaltravel_image/welcome12.png";
import Link from "next/link";
import Signin from "../auth/Signin";
import { useState } from "react";
import SignUp from "../auth/SignUp";

const Welcome = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (

        <section className="welcome-page-parent">

            <div className="welcome-parent">
                <div className="welcome-child">
                    <div className="welcome-logo">
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            unoptimized
                        />
                    </div>

                    <div className="welcome-main-head-parent">
                        <div className="welcome-main-head-child">
                            <div className="overlay-back"></div>
                            <div className="welcome-background">
                                <Image
                                    src={back}
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <div className="welcome-background-child">
                                    <h3>TAILOR-MADE HOLIDAY</h3>
                                    <p>Our Unique Take on Travel</p>
                                    <div className="welcome-overlay-btn">
                                        <Popup trigger={<button>Get on the road</button>} position="right center" modal nested>
                                            {close => (
                                                <div className="modal">
                                                    <button className="close" onClick={close}>
                                                        &times;
                                                    </button>
                                                    <div className="content">
                                                        {
                                                            isLogin
                                                                ?
                                                                <SignUp setIsLogin={setIsLogin} />
                                                                :
                                                                <Signin setIsLogin={setIsLogin} />

                                                        }

                                                    </div>
                                                </div>
                                            )}
                                        </Popup>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="small-content-parent">
                        <div className="small-content-child">
                            <div className="content-parent">
                                <div className="content-child">
                                    <h3>Original <br /> Services</h3>
                                    <p>What sets us apart from <br />the competition</p>
                                    <a>Learn More</a>
                                </div>
                                <div className="content-child"
                                    style={{
                                        backgroundImage: `url(${carbon.src})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '150% auto',
                                        backgroundPosition: 'top 0rem right -4rem',
                                    }}>
                                    <h3>100% Carbon <br />Absorption</h3>

                                    <a>Learn More</a>
                                </div>

                            </div>

                            <div className="content-child1-parent">

                                <div className="content-child1-child"
                                    style={{
                                        backgroundImage: `url(${destination.src})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '150% auto',
                                        backgroundPosition: 'top 0rem right -4rem',
                                    }}>
                                    <h3>Destination Specialists</h3>
                                    <p>Our experts will create you an ultra-personalised holiday</p>
                                    <a>Learn More</a>
                                </div>
                            </div>
                            <div className="content-parent2">
                                <div className="content-child2"
                                    style={{
                                        backgroundImage: `url(${hotel.src})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '150% auto',
                                        backgroundPosition: 'top 0rem right 0rem',
                                    }}>

                                </div>
                                <div className="content-child2">
                                    <h3>Our local Concierge<br />Service</h3>
                                    <p>Our Concierge are there to help <br /> with any arrangements while <br />you're away</p>
                                    <a>Learn More</a>
                                </div>

                            </div>
                            <div className="content-parent3">
                                <div className="content-child3">
                                    <h3>Plus much more...</h3>
                                    <p>From lounge access at aiports<br />to our own dedicated guides<br />and access to a ho-tech app <br />while on holiday</p>
                                    <a>Learn More</a>
                                </div>
                                <div className="content-child3"
                                    style={{
                                        backgroundImage: `url(${auto.src})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '100% auto',
                                        backgroundPosition: 'top -2.3rem right 0rem',
                                    }}>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="holiday-parent">
                        <div className="holiday-child">
                            <div className="holiday-head">
                                <h2>Our Holiday Collections</h2>
                                <p>Because every traveller is different</p>
                            </div>
                        </div>
                        <div className="holiday-image-parent">
                            <div className="holiday-image-child">
                                <Image
                                    src={welcome7}
                                    alt="image"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <h2>Family Holiday</h2>
                            </div>
                            <div className="holiday-image-child">
                                <Image
                                    src={welcome8}
                                    alt="image"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                                <h2>Honey Moon</h2>
                            </div>
                        </div>
                        <div className="holiday-image-parent">
                            <div className="holiday-image-child">
                                <Image
                                    src={welcome9}
                                    alt="image"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <h2>Luxury Holiday</h2>
                            </div>
                            <div className="holiday-image-child">
                                <Image
                                    src={welcome10}
                                    alt="image"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                                <h2>Couple Holiday</h2>
                            </div>
                        </div>
                        <div className="holiday-image-parent">
                            <div className="holiday-image-child">
                                <Image
                                    src={welcome11}
                                    alt="image"
                                    width={100}
                                    height={100}
                                    unoptimized
                                />
                                <h2>Summer Holiday</h2>
                            </div>
                            <div className="holiday-image-child">
                                <Image
                                    src={welcome12}
                                    alt="image"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                                <h2>Responsible Holiday</h2>
                            </div>
                        </div>
                    </div>

                    <div className="trending-page-parent">
                        <div className="trending-page-child">
                            <div className="trending-head">
                                <h2>Trending Right Now</h2>
                                <p>Our Top Pick Destinations</p>
                            </div>
                            <div className="trending-image-parent">
                                <div className="trending-image-child">
                                    <Image
                                        src={welcome4}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />
                                    <h3>Japan</h3>
                                    <p>The best Japan holidays start by throwing you in at the
                                        deep end of this extraordinary country, with an
                                        experience-led adventure you won’t forget. Despite his jet
                                        lag, Bill Murray shone a light on the poetic and urban
                                        chaos of Tokyo in the film ‘Lost in Translation’ captured
                                        the essence...</p>
                                </div>
                            </div>
                            <div className="trending-image-parent">
                                <div className="trending-image-child">
                                    <Image
                                        src={welcome6}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />
                                    <h3>Portugal</h3>
                                    <p>Portugal is an ocean-loving country. Running right down
                                        the wild Atlantic coast, every inch of this place seems to
                                        turn towards the sea. Explore further, though, and you'll
                                        discover that the border region with Spain ripples with
                                        small mountains while the Douro Valley...</p>
                                </div>
                            </div>
                            <div className="trending-image-parent">
                                <div className="trending-image-child">
                                    <Image
                                        src={welcome5}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />
                                    <h3>Colombia</h3>
                                    <p>Colombia is a shining example of a country that, through
                                        sheer force of collective will, has undergone a complete
                                        makeover. The country is well summed up by the local
                                        saying, 'the only risk is wanting to stay', and after a
                                        turbulent recent history, there’s no doubt Colombia has
                                        shed its notorious reputation...</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <p>Copyrights © 2024 OriginalTravel.All Rights Reserved</p>
            </div>


        </section>
    )
}

export default Welcome



