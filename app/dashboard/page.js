import Sidebar from "@/components/sidebar/Sidebar";
import { auth } from "../auth";
import { fetchNotice } from "../actions/notice/data";
import { fetchAuthenticatedUser, fetchCommission, fetchMembership } from "../actions/user/data";
import Image from "next/image";
import SecurityCheck from "@/components/checkSecurityCode/CheckSecurityCode";

import logo from "@/public/originaltravel_image/OriginalTravel-Logo-03.png";
import bgimg from "@/public/home-page/bgimg.png";
import icon1 from "@/public/home-page/icon1.png";
import icon2 from "@/public/home-page/icon2.png";
import icon3 from "@/public/home-page/icon3.png";
import icon4 from "@/public/home-page/icon4.png";
import icon6 from "@/public/home-page/icon6.png";
import welcome1 from "@/public/home-page/welcome1.png";
import welcome2 from "@/public/home-page/welcome2.png";
import hcenter from "@/public/home-page/home-center.jpg";


export const dynamic = "force-dynamic"

import Dogglewindow from "@/components/doggleWindow/Dogglewindow";
import Link from "next/link";
import Navbar from "@/components/navBar/Navbar";

const page = async () => {

    const { user } = await auth();
    const authenticatedUser = await fetchAuthenticatedUser() || {};
    const notice = await fetchNotice() || [];
    const { allCommission, userCommission } = await fetchCommission();

    const memberShipLevel = await fetchMembership();

    return (
        <>
            <div className="main-home">

                <Navbar />
                <div className="main-home">
                    <div className="bg-img">
                        <Image
                            src={bgimg}
                            alt="bg img"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>

                    <div className="home-main-container">
                        <div className="home-content-parent">
                            <div className="home-content-child">
                                <div className="logo-panel">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="home-content-child">
                                <div className="text-panel">
                                    <p>Original Travel provides a unique, people-focused service that enables you to easily
                                        manage your corporate travel program, ensuring
                                        you receive a personalized experience that is
                                        also cost-effective.</p>
                                </div>
                            </div>
                        </div>


                        <div className="home-cards-parent">
                            <div className="home-cards-child">
                                <Link href="/dashboard/journey">
                                    <div className="home-cards-sub-child">

                                        <div className="card-icon">
                                            <Image
                                                src={icon1}
                                                alt="icon"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="card-name">
                                            <p>Explore</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/dashboard/recharge">
                                    <div className="home-cards-sub-child">
                                        <div className="card-icon">
                                            <Image
                                                src={icon2}
                                                alt="icon"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="card-name">
                                            <p>Recharge</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/dashboard/withdrawal">
                                    <div className="home-cards-sub-child">
                                        <div className="card-icon">
                                            <Image
                                                src={icon3}
                                                alt="icon"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="card-name">
                                            <p>Withdraw</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="/dashboard/invite">
                                    <div className="home-cards-sub-child">
                                        <div className="card-icon">
                                            <Image
                                                src={icon4}
                                                alt="icon"
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="card-name">
                                            <p>Referral</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <Dogglewindow
                                memberShipLevel={JSON.parse(JSON.stringify(memberShipLevel))}
                            />

                        </div>
                        <div className="home-center-content-parent">
                            <div className="home-center-content-child">
                                <div className="center-image-parent">
                                    <Image
                                        src={hcenter}
                                        alt="Image"
                                        width={100}
                                        height={100}
                                        unoptimized
                                    />
                                    <h2>Our Concierage Service</h2>
                                    <p>A connoisseur of their country, our Concierges are on
                                        hand to take your trip to the next level. Before you even
                                        set off on your adventure, your dedicated Concierge will
                                        be informed of all of your trip’s details and your likes and
                                        dislikes. When you arrive, they’ll be in touch to let you
                                        know that they’re on hand to help with everything, from
                                        last-minute changes to tips and tricks on where to go and
                                        what to see.</p>
                                </div>
                            </div>
                            <div className="scroll-container">
                                <Image
                                    src={welcome1}
                                    alt="logo"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                                <Image
                                    src={welcome2}
                                    alt="logo"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />

                            </div>
                            <div className="aboutus-parent">
                                <h2>About Us</h2>
                                <p>Who we are, what we do and how we create
                                    100% tailor-made holidays</p>
                            </div>
                            <div className="point-of-contact">
                                <h2>ONE POINT OF CONTACT</h2>
                                <p>At Original Travel we want everything to run as
                                    smoothly as possible so we’ve made sure that you’ll
                                    only ever have one point of contact. From
                                    brainstorming your holiday in the beginning to getting
                                    you home safely at the end, our destination expert will
                                    create an itinerary tailored just for you.
                                </p>

                            </div>
                            <div className="welcome-footer-container">
                                <div className="welcome-footer">
                                    <p>Copyright © 2024 Original Travel . All Rights Reserved.</p>
                                    <div className="help-center-icon">
                                        <Image
                                            src={icon6}
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
                </div>

            </div>
            <SecurityCheck
                user={JSON.parse(JSON.stringify(user))}
                authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
            />
        </>
    )
}

export default page