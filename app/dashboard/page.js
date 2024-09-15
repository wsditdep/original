import Sidebar from "@/components/sidebar/Sidebar";
import { auth } from "../auth";
import { fetchNotice } from "../actions/notice/data";
import { fetchAuthenticatedUser, fetchCommission } from "../actions/user/data";
import Image from "next/image";
import SecurityCheck from "@/components/checkSecurityCode/CheckSecurityCode";


import logo from "@/public/logo.png";
import notifiicon from "@/public/sidebar/notifiicon.png";
import bgimg from "@/public/home-page/bgimg.png";
import icon1 from "@/public/home-page/icon1.png";
import icon2 from "@/public/home-page/icon2.png";
import icon3 from "@/public/home-page/icon3.png";
import icon4 from "@/public/home-page/icon4.png";
export const dynamic = "force-dynamic"

import Dogglewindow from "@/components/doggleWindow/Dogglewindow";





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
                                    <div className="logo">
                                        <Image
                                            src={logo}
                                            height={100}
                                            width={100}
                                            alt="logo"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                                <div className="dashboard-navigation-childs">
                                    <div className="notifi-icon">
                                        <Image
                                            src={notifiicon}
                                            height={100}
                                            width={100}
                                            alt="logo"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="notifi-count">
                                        <p>5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <p>Ausventure Travel provides a unique, people-focused service that enables you to easily
                                        manage your corporate travel program, ensuring
                                        you receive a personalized experience that is
                                        also cost-effective.</p>
                                </div>
                            </div>
                        </div>


                        <div className="home-cards-parent">
                            <div className="home-cards-child">
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
                                        <p>Reload</p>
                                    </div>
                                </div>
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
                            </div>


                            <Dogglewindow />

                            
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