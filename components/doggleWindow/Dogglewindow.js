"use client"

import { useState } from "react";
import Image from "next/image";
import icon5 from "@/public/home-page/icon5.png";
import vip1 from "@/public/home-page/vip1.png";
import vip2 from "@/public/home-page/vip2.png";
import vip3 from "@/public/home-page/vip3.png";
import vip4 from "@/public/home-page/vip4.png";

export default function Dogglewindow({ memberShipLevel }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isUpSideDouwnIcon, setIsUpSideDouwnIcon,] = useState(false)
    const membership = memberShipLevel.membership_name;

    function toggle() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <div className="home-vip-card-container">
            <div className="home-vip-cards-parent">
                <div className="home-vip-cards-child">
                    <div className="home-vip-cards-sub-child">
                        <div className="vip-card-icon">
                            <Image
                                src={icon5}
                                alt="icon"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="home-vip-cards-sub-child">
                        <div className="vip-card-name">
                            <p>VIP Membership Details</p>
                        </div>
                    </div>
                </div>
                <div className="home-vip-cards-child">
                    <div className="home-vip-cards-sub-child">
                        <div className="vip-card-btn" onClick={toggle}>
                            {
                                isUpSideDouwnIcon
                                    ?
                                    <i className="fa-solid fa-chevron-up" onClick={() => setIsUpSideDouwnIcon(false)}></i>
                                    :
                                    <i className="fa-solid fa-chevron-down" onClick={() => setIsUpSideDouwnIcon(true)}></i>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {isOpen &&
                <div className="down-content-container">
                    <div className="down-top-heading">
                        <h1>VIP Level</h1>
                    </div>
                    <div className="down-content-parent">
                        <div className="down-content-child">
                            <div className="content-parent">
                                <div className="content-child">
                                    <div className="content-sub-child">
                                        <Image
                                            src={vip1}
                                            alt="icon"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="content-sub-child">
                                        <h3>Level 1 Traveller</h3>
                                        {/* <p>$ 100.00</p> */}
                                    </div>
                                </div>
                                <div className="content-child">
                                    {
                                        membership === "Basic Tour" ? <button>Current</button> : <></>
                                    }

                                </div>
                            </div>
                            <div className="content-parent">
                                <div className="content-child">
                                    {/* <p>0.25% profit per transaction, 1 withdrawal after completing
                                        20 transactions per day, 0% handling fee</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-content-parent">
                        <div className="down-content-child">
                            <div className="content-parent">
                                <div className="content-child">
                                    <div className="content-sub-child">
                                        <Image
                                            src={vip2}
                                            alt="icon"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="content-sub-child">
                                        <h3>Level 2 Traveller</h3>
                                        {/* <p>$ 100.00</p> */}
                                    </div>
                                </div>
                                <div className="content-child">
                                    {
                                        membership === "Silver Tour" ? <button>Current</button> : <></>
                                    }
                                </div>
                            </div>
                            <div className="content-parent">
                                <div className="content-child">
                                    {/* <p>0.25% profit per transaction, 1 withdrawal after completing
                                        20 transactions per day, 0% handling fee</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-content-parent">
                        <div className="down-content-child">
                            <div className="content-parent">
                                <div className="content-child">
                                    <div className="content-sub-child">
                                        <Image
                                            src={vip3}
                                            alt="icon"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="content-sub-child">
                                        <h3>Level 3 Traveller</h3>
                                        {/* <p>$ 100.00</p> */}
                                    </div>
                                </div>
                                <div className="content-child">
                                    {
                                        membership === "Gold Tour" ? <button>Current</button> : <></>
                                    }
                                </div>
                            </div>
                            <div className="content-parent">
                                <div className="content-child">
                                    {/* <p>0.25% profit per transaction, 1 withdrawal after completing
                                        20 transactions per day, 0% handling fee</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="down-content-parent">
                        <div className="down-content-child">
                            <div className="content-parent">
                                <div className="content-child">
                                    <div className="content-sub-child">
                                        <Image
                                            src={vip4}
                                            alt="icon"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                    </div>
                                    <div className="content-sub-child">
                                        <h3>Level 4 Traveller</h3>
                                        {/* <p>$ 100.00</p> */}
                                    </div>
                                </div>
                                <div className="content-child">
                                    {
                                        membership === "Elite Tour" ? <button>Current</button> : <></>
                                    }
                                </div>
                            </div>
                            <div className="content-parent">
                                <div className="content-child">
                                    {/* <p>0.25% profit per transaction, 1 withdrawal after completing
                                        20 transactions per day, 0% handling fee</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
}
