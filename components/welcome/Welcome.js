"use client"


import Image from "next/image"
import Popup from "reactjs-popup";
import logo from "@/public/welcome/logo.png";
import bgimg1 from "@/public/welcome/bgimg1.jpeg"
import bgimg2 from "@/public/welcome/bgimg2.jpeg"
import bgimg3 from "@/public/welcome/bgimg3.png"
import bgimg4 from "@/public/welcome/bgimg4.png"
import bgimg5 from "@/public/welcome/bgimg5.jpeg"
import bgimg6 from "@/public/welcome/bgimg6.png"
import img1 from "@/public/welcome/img1.jpeg"
import img2 from "@/public/welcome/img2.jpeg"
import img3 from "@/public/welcome/img3.jpeg"
import img4 from "@/public/welcome/img4.jpeg"
import img5 from "@/public/welcome/img5.jpeg"
import img6 from "@/public/welcome/img6.jpeg"
import img7 from "@/public/welcome/img7.jpeg"
import img8 from "@/public/welcome/img8.jpeg"
import icon1 from "@/public/welcome/icon1.png"
import Link from "next/link";
import Signin from "../auth/Signin";
import { useState } from "react";
import SignUp from "../auth/SignUp";

const Welcome = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (

        <section className="welcome-page-parent">
            <div className="welcomepage-parent">
                <div className="welcomepage-child">
                    <div className="welcome-top-parent">
                        <div className="welcome-top-child">
                            <Image
                                src={logo}
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
                <div className="welcomepage-child">
                    <div className="welcome-bg-img">
                        <Image
                            src={bgimg1}
                            alt="img"
                            height={100}
                            width={100}
                            unoptimized
                        />
                        <div className="welcome-overlay">
                            <div className="overlay-img">
                                <Image
                                    src={bgimg3}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="welcome-overlay-content">
                                <p>Diving the Great Barrier Reef, sailing the
                                    Whitsundays, 4WD-touring Fraser Island... book
                                    one of our tailor-made East Coast packages and
                                    save with our package discounts.</p>
                            </div>
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
                    <div className="welcome-bg-img">
                        <Image
                            src={bgimg2}
                            alt="img"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                </div>
                <div className="welcomepage-child">
                    <div className="welcome-bg-white">
                        <div className="content-img">
                            <Image
                                src={bgimg4}
                                alt="img"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className="content-text">
                            <p>Ancient rainforests, remote islands, beautiful coral
                                reefs and thousands of road-trip worthy
                                destinations are waiting for you. Ausventure Travel
                                offers discounted campervan rentals, scuba diving
                                trips, tours & activities in Australia & New Zealand
                                and give personalised travel advice.</p>
                        </div>
                    </div>
                </div>
                <div className="welcomepage-child">
                    <div className="welcome-content">
                        <div className="content-top-img">
                            <Image
                                src={bgimg5}
                                alt="img"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className="welcome-bg-white">
                            <div className="content-img">
                                <Image
                                    src={bgimg6}
                                    alt="img"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="content-text">
                                <p>From small budget sleeper vans for two to
                                    luxurious motorhomes with a shower and toilet for
                                    the entire family, we will help you find the best
                                    vehicle for your needs and budget. And we save
                                    you money! We’ve worked in the tourism industry
                                    for quite a few years and can offer prices that are
                                    cheaper than booking your campervan or
                                    motorhome directly with a provider.</p>
                            </div>
                        </div>

                        <div className="content-main">
                            <div className="main-top">
                                <h1>Our most popular Destinations</h1>
                            </div>
                            <div className="img-content-container">
                                <div className="img-content-parent">
                                    <div className="img-content-child">
                                        <Image
                                            src={img1}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <div className="img-footer-name">
                                            <h1>Great Barrier Reef</h1>
                                        </div>
                                    </div>
                                    <div className="img-content-child">
                                        <Image
                                            src={img2}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <div className="img-footer-name">
                                            <h1>Ningaloo Reef</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-content-parent">
                                    <div className="img-content-child">
                                        <Image
                                            src={img3}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <div className="img-footer-name">
                                            <h1>fraser Island</h1>
                                        </div>
                                    </div>
                                    <div className="img-content-child">
                                        <Image
                                            src={img4}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <div className="img-footer-name">
                                            <h1>Whitesundays Island</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-content-parent">
                                    <div className="img-content-child">
                                        <Image
                                            src={img5}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <div className="img-footer-name">
                                            <h1>Great Ocean Road</h1>
                                        </div>
                                    </div>
                                    <div className="img-content-child">
                                        <Image
                                            src={img6}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <div className="img-footer-name">
                                            <h1>Cradle Mountain</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-content-parent">
                                    <div className="img-content-child">
                                        <Image
                                            src={img7}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <div className="img-footer-name">
                                            <h1>Kakadu National Park</h1>
                                        </div>
                                    </div>
                                    <div className="img-content-child">
                                        <Image
                                            src={img8}
                                            alt="img"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <div className="img-footer-name">
                                            <h1>Uluru</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="welcome-footer">
                            <p>Copyright © 2024 Ausventure . All Rights Reserved.</p>
                            <div className="help-center-icon">
                                <Image
                                    src={icon1}
                                    alt="icon"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome



