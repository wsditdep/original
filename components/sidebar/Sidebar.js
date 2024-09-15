"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import user from "@/public/user.svg";
import toast from "react-hot-toast";
import Link from 'next/link';

import tandc from "@/public/icon/tandc.svg";
import agent from "@/public/icon/agent.svg";
import faq from "@/public/icon/faq.svg";
import info from "@/public/icon/info.svg";
import booking from "@/public/icon/placeorder.svg";
import deposite from "@/public/icon/deposite.svg";
import withdrawal from "@/public/icon/withdrawal.svg";
import invitation from "@/public/icon/invitation.svg";
import dealingslip from "@/public/icon/dealingship.svg";
import myteam from "@/public/icon/myteam.svg";
import security from "@/public/icon/security.svg";
import support from "@/public/icon/support.svg";
import bank_card from "@/public/icon/bank_card.svg";
import { logout } from '@/app/actions/user/action';
import { useRouter } from 'next/navigation';

import sidebtn from "@/public/sidebar/sidebtn.png"

const Sidebar = ({ session }) => {
    const [isNav, setIsNav] = useState(false);
    const { push, refresh } = useRouter();

    const handleLogout = async () => {
        await logout();
        push("/");
        refresh();
        toast.success("Logged Out Successfully");
    }

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    return (
        <div className="dashboard-navigation-childs">
            <div onClick={() => setIsNav(true)} className='side-btn'>
                <Image
                    src={sidebtn}
                    alt='img'
                    height={100}
                    width={100}
                    unoptimized
                />
            </div>
            {
                isNav ? <div className="sidebar-overlay" onClick={() => setIsNav(false)}></div> : <></>
            }
            <div className={isNav ? "side-navbar-wrapper rightVal" : "side-navbar-wrapper"}>
                <div className="nav-profile-outer-wrapper">
                    <div className="navbar-profile-wrapper">
                        <div className="navbar-childs">
                            <Link href="/dashboard/profile">
                                {
                                    session && session?.url && session?.url === null
                                        ?
                                        <Image
                                            src={user}
                                            alt="user"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        :
                                        <Image
                                            src={session?.url ?? user}
                                            alt="user"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                }
                            </Link>
                        </div>
                        <div className="navbar-childs">
                            <div className='back-ground'>
                                <h3>{session?.username ?? ""}</h3>
                                <p>Invitation Code</p>
                                <h4 onClick={() => copyToClipboard(session?.invitation_code ?? "")}>{session?.invitation_code ?? ""} <i className="fa fa-clipboard"></i></h4>
                            </div>

                        </div>
                    </div>
                    <div className="sidebar-progress-bar">
                        <div className="sidebar-progress-bar-parent">
                            <div className="sidebar-progress-bar-childs">
                                <div className="progressbar-track">
                                    <div className="progressbar-thumb" style={{ width: `${session?.credibility}%` }}></div>
                                </div>
                            </div>
                            <div className="sidebar-progress-bar-childs">
                                <p>{session?.credibility}%</p>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-account-info-wrapper">
                        <div className="sidebar-account-info-parent">
                            <div className="sidebar-account-info-childs">
                                <p>Account Balance</p>
                                <h3>$ {(session?.balance !== undefined ? session.balance.toFixed(2) : "0.00")}</h3>
                            </div>
                            <div className="sidebar-account-info-childs">
                                <p>Daily Commissions</p>
                                <h3>$ {(session?.balance !== undefined ? session.today_commission.toFixed(2) : "0.00")}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-bar-lists">
                    <ul>
                        <Link href="/dashboard/content/tc">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={tandc}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>T&C</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/support">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={agent}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Customer Support Agent</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/content/faq">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={faq}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>FAQs</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/content/about">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={info}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Intro</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/journey">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={booking}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>start</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/recharge">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={deposite}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Recharge</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/withdrawal">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={withdrawal}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Withdraw</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/invite">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={invitation}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Invitation</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/history">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={dealingslip}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Dealing Slip</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={myteam}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>My Team</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/recovery/changePassword">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={security}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Security</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/support">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={support}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Live Agent Support</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <Link href="/dashboard/withdrawal/linkwallet">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={bank_card}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Wallet Info</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <li className="logout-style" onClick={() => handleLogout()}>
                            <div className="side-bar-list">
                                <i className="fa fa-sign-out"></i>
                                <p>Logout</p>
                            </div>
                            <div className="side-bar-list">
                                {/* <i className="fa fa-angle-right"></i> */}
                            </div>
                        </li>
                    </ul>
                    <p className="sidebar-copyright">Copyright © 2024 Agencyauto. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar