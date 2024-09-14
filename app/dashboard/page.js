


import Sidebar from "@/components/sidebar/Sidebar";
import { auth } from "../auth";
import { fetchNotice } from "../actions/notice/data";
import { fetchAuthenticatedUser, fetchCommission } from "../actions/user/data";
import Image from "next/image";
import Link from "next/link";
import userProfile from "@/public/user.svg";
import SecurityCheck from "@/components/checkSecurityCode/CheckSecurityCode";


import logo from "@/public/logo.png";


import homeImage1 from "@/public/homee_feature/home-img1.png";
import homeImage2 from "@/public/homee_feature/home-img2.png";
import homeImage3 from "@/public/homee_feature/home-img3.png";
import homeImage4 from "@/public/homee_feature/home-img4.png";

export const dynamic = "force-dynamic"



import withdrawal from "@/public/icon/withdrawal.svg";
import deposite from "@/public/icon/deposite.svg";
import bank_card from "@/public/icon/bank_card.svg";
import invitation from "@/public/icon/invitation.svg";
import info from "@/public/icon/info.svg";
import faq from "@/public/icon/faq.svg";
import tandc from "@/public/icon/tandc.svg";
import agent from "@/public/icon/agent.svg";

import vip1 from "@/public/newvip/vip1.png";
import vip2 from "@/public/newvip/vip2.png";
import vip3 from "@/public/newvip/vip3.png";
import vip4 from "@/public/newvip/vip4.png";



const page = async () => {

    const { user } = await auth();
    const authenticatedUser = await fetchAuthenticatedUser() || {};
    const notice = await fetchNotice() || [];
    const { allCommission, userCommission } = await fetchCommission();



    return (
        <>




            <div className="main-home">
                <div className="top-nav">
                    <div className="top-nav-parent">

                        <div className="dashboard-navigation">
                            <div className="dashboard-navigation-parent">
                                <Sidebar session={JSON.parse(JSON.stringify(authenticatedUser))} />
                                <div className="dashboard-navigation-childs">
                                    <div className="car-logo">
                                        <Image
                                            className="car-main"
                                            src={logo}
                                            height={100}
                                            width={100}
                                            alt="logo"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="landing-profile">
                            <div className="landing-profile-childs">
                                <Link href="/dashboard/profile">
                                    {
                                        authenticatedUser && authenticatedUser?.url && authenticatedUser?.url === null
                                            ?
                                            <i className="fa fa-user"></i>
                                            :
                                            <Image
                                                src={authenticatedUser?.url ?? userProfile}
                                                alt="profile"
                                                height={100}
                                                width={100}
                                            />
                                    }
                                </Link>
                            </div>
                            <div className="landing-profile-childs">
                                <h3>Hello! {authenticatedUser?.username ?? ""}</h3>
                            </div>
                        </div>
                        <div className="notice-board-parent">
                            <div className="notice-board-childs">
                                <i className="fa fa-volume-up"></i>
                            </div>
                            <div className="notice-board-childs">
                                <p>{notice[0]?.notice}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="land-video">
                    <div className="video">
                        <video width="100%" autoPlay loop muted>
                            <source src="/landingVideo.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="quick-action-wrapper">
                    <div className="dashboard-heading">
                        <h3>QUICK ACTIONS</h3>
                    </div>
                    <div className="quick-action-parent quick-action-parent-alt mt1">
                        <div className="quick-action-chiilds">
                            <Link href="/dashboard/withdrawal">
                                <div className="quick-action-btn">
                                    <Image
                                        src={withdrawal}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <h3>Withdraw</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="quick-action-chiilds">
                            <Link href="/dashboard/recharge">
                                <div className="quick-action-btn">
                                    <Image
                                        src={deposite}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <h3>Recharge</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="quick-action-chiilds">
                            <Link href="/dashboard/withdrawal/linkwallet">
                                <div className="quick-action-btn">
                                    <Image
                                        src={bank_card}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <h3>Wallet Details</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="quick-action-chiilds">
                            <Link href="/dashboard/invite">
                                <div className="quick-action-btn">
                                    <Image
                                        src={invitation}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <h3>Referral Code</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="quick-action-parent quick-action-parent-alt quick-border-top">
                        <div className="quick-action-chiilds">
                            <Link href="/dashboard/content/about">
                                <div className="quick-action-btn">
                                    <Image
                                        src={info}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <h3>About</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="quick-action-chiilds">
                            <Link href="/dashboard/content/faq">
                                <div className="quick-action-btn">
                                    <Image
                                        src={faq}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <h3>FAQs</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="quick-action-chiilds">
                            <Link href="/dashboard/content/tc">
                                <div className="quick-action-btn">
                                    <Image
                                        src={tandc}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <h3>T & C</h3>
                                </div>
                            </Link>
                        </div>
                        <div className="quick-action-chiilds">
                            <Link href="/dashboard/support">
                                <div className="quick-action-btn">
                                    <Image
                                        src={agent}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <h3>Support</h3>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="main-info">
                    <div className="letter">
                        <p>
                            Describe What you're looking for
                        </p>
                    </div>
                    <div className="main-car">
                        <div className="main-car-parent">
                            <div className="main-car-childs">
                                <div className="image">
                                    <Image
                                        src={homeImage1}
                                        height={100}
                                        width={100}
                                        alt="logo"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="main-car-childs">
                                <h3 className="bm">New International Guest House</h3>
                            </div>
                        </div>
                        <div className="main-car-parent">
                            <div className="main-car-childs">
                                <div className="image">
                                    <Image
                                        src={homeImage2}
                                        height={100}
                                        width={100}
                                        alt="logo"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="main-car-childs">
                                <h3 className="bm">Regent Hong Kong</h3>
                            </div>
                        </div>
                    </div>
                    <div className="main-car">
                    <div className="main-car-parent">
                            <div className="main-car-childs">
                                <div className="image">
                                    <Image
                                        src={homeImage3}
                                        height={100}
                                        width={100}
                                        alt="logo"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="main-car-childs">
                                <h3 className="bm">Conrad Hong Kong</h3>
                            </div>
                        </div>
                        <div className="main-car-parent">
                            <div className="main-car-childs">
                                <div className="image">
                                    <Image
                                        src={homeImage4}
                                        height={100}
                                        width={100}
                                        alt="logo"
                                        unoptimized
                                    />
                                </div>
                            </div>
                            <div className="main-car-childs">
                                <h3 className="bm">Lanson Place Causeway Bay</h3>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="vip-status-wrapper">
                    <div className="vip-status-heading">
                        <h3>Membership Level</h3>
                        <p>Benefits Of Upgrades</p>
                    </div>
                    <div className="vip-card-wrapper">
                        <div className="vip-card-parent">
                            <div className="vip-card-childs">
                                <div className="vip-card">
                                    <div className="vip-card-image">
                                        <Image
                                            src={vip1}
                                            height={100}
                                            width={100}
                                            alt="icon"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="vip-card-status">
                                        <p><i className="fa fa-unlock"></i> Unlock</p>
                                    </div>
                                    <div className="vip-card-info">
                                        <h4>Elite Traveler 1</h4>
                                        <p>0.50%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="vip-card-childs">
                                <div className="vip-card">
                                    <div className="vip-card-image">
                                        <Image
                                            src={vip2}
                                            height={100}
                                            width={100}
                                            alt="icon"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="vip-card-status">
                                        <p><i className="fa fa-lock"></i> Lock</p>
                                    </div>
                                    <div className="vip-card-info">
                                        <h4>New Comer Traveler 1</h4>
                                        <p>0.60%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vip-card-wrapper">
                        <div className="vip-card-parent">
                            <div className="vip-card-childs">
                                <div className="vip-card">
                                    <div className="vip-card-image">
                                        <Image
                                            src={vip3}
                                            height={100}
                                            width={100}
                                            alt="icon"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="vip-card-status">
                                        <p><i className="fa fa-lock"></i> Lock</p>
                                    </div>
                                    <div className="vip-card-info">
                                        <h4>Professional Traveler 1</h4>
                                        <p>0.70%</p>
                                    </div>
                                </div>
                            </div>
                            <div className="vip-card-childs">
                                <div className="vip-card">
                                    <div className="vip-card-image">
                                        <Image
                                            src={vip4}
                                            height={100}
                                            width={100}
                                            alt="icon"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="vip-card-status">
                                        <p><i className="fa fa-lock"></i> Lock</p>
                                    </div>
                                    <div className="vip-card-info">
                                        <h4>Premium Traveler 1</h4>
                                        <p>0.80%</p>
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