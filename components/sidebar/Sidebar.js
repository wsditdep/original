"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import user from "@/public/user.svg";
import toast from "react-hot-toast";
import Link from 'next/link';
import { logout } from '@/app/actions/user/action';
import { useRouter } from 'next/navigation';

import sidebtn from "@/public/sidebar/sidebtn.png"
import nouser from "@/public/sidebar/nouser.png"
import bronzelevel from "@/public/sidebar/vip1.png"
import silverlevel from "@/public/sidebar/vip2.png"
import goldlevel from "@/public/sidebar/vip3.png"
import elitelevel from "@/public/sidebar/vip4.png"
import copy from "@/public/sidebar/copy.png";
import icon1 from "@/public/sidebar/icon1.png";
import icon2 from "@/public/sidebar/icon2.png";
import icon3 from "@/public/sidebar/icon3.png";
import icon4 from "@/public/sidebar/icon4.png";
import icon5 from "@/public/sidebar/icon5.png";
import icon6 from "@/public/sidebar/icon6.png";
import icon7 from "@/public/sidebar/icon7.png";
import icon8 from "@/public/sidebar/icon8.png";
import icon9 from "@/public/sidebar/icon9.png";
import icon10 from "@/public/sidebar/icon10.png";
import icon11 from "@/public/sidebar/icon11.png";
import icon12 from "@/public/sidebar/icon12.png";
import icon13 from "@/public/sidebar/icon13.png";
import icon14 from "@/public/sidebar/icon14.png";
import notifiicon from "@/public/sidebar/notifiicon.png";
import Popup from 'reactjs-popup';
import Tc from '../content/Tc';
import Agent from '../content/Agent';
import Faq from '../content/Faq';
import About from '../content/About';
import { Profile } from '../profile/Profile';


const Sidebar = ({ session, content }) => {
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


    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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

                <div className='side-bar-top-wrapper'>

                    <div className='side-bar-profile-parent'>
                        <div className='side-bar-profile-child'>
                            <div className='profile-parent'>
                                <div className='profile-child'>
                                    <div className='side-close-btn'>
                                        <Image
                                            src={sidebtn}
                                            alt='icon'
                                            height={100}
                                            width={100}
                                            unoptimized
                                            onClick={() => setIsNav(false)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='profile-parent'>
                                <div className='profile-child'>
                                    <div className='user-img' onClick={openModal}>
                                        {
                                            session && session?.url && session?.url === null
                                                ?
                                                <Image
                                                    src={nouser}
                                                    alt="user"
                                                    height={100}
                                                    width={100}
                                                    unoptimized
                                                />
                                                :
                                                <Image
                                                    src={session?.url ?? user}
                                                    alt='icon'
                                                    height={100}
                                                    width={100}
                                                    unoptimized
                                                />
                                        }
                                    </div>



                                    <div className="modal-container">
                                        {isOpen && (
                                            <div className="modal-overlay" onClick={closeModal}>
                                                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                                    <div className='model-title'>
                                                        <h2>Profile</h2>
                                                    </div>
                                                    <Profile session={JSON.parse(JSON.stringify(session))} />
                                                    <div className='btn-wrap'>
                                                        <button onClick={closeModal}>Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>



                                </div>
                            </div>
                            <div className='profile-parent'>
                                <div className='profile-child'>
                                    <div className='class-name'>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='side-bar-pro-detaile-parent'>
                        <div className='side-bar-pro-detaile-child'>
                            <div className='detaile-sub-child'>
                                <div className='user-name'>
                                    <p>{session?.username ?? ""}</p>
                                </div>
                            </div>
                            <div className='detaile-sub-child'>
                                <div className='user-level'>

                                    {
                                        session?.membership_level === "Starter Traveller"
                                            ?
                                            <Image
                                                src={bronzelevel}
                                                alt='icon'
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                            : session?.membership_level === "Regular Travelle"
                                                ? <Image
                                                    src={silverlevel}
                                                    alt='icon'
                                                    height={100}
                                                    width={100}
                                                    unoptimized
                                                />
                                                : session?.membership_level === "Expert Traveller"
                                                    ? <Image
                                                        src={goldlevel}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                        unoptimized
                                                    />
                                                    : session?.membership_level === "Elite Traveller"
                                                        ? <Image
                                                            src={elitelevel}
                                                            alt='icon'
                                                            height={100}
                                                            width={100}
                                                            unoptimized
                                                        />
                                                        :
                                                        <></>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='side-bar-ref-parent'>
                        <div className='side-bar-ref-child'>
                            <div className='ref-sub-child'>
                                <div className='ref-title'>
                                    <p>My Referral Code: <span onClick={() => copyToClipboard(session?.invitation_code ?? "")}>{session?.invitation_code ?? ""}</span></p>
                                </div>
                            </div>
                            <div className='ref-sub-child'>
                                <div className='ref-copy-icon' onClick={() => copyToClipboard(session?.invitation_code ?? "")}>
                                    <Image
                                        src={copy}
                                        alt='icon'
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='side-bar-prof-parent'>
                        <div className='side-bar-prof-child'>
                            <div className='prof-sub-child'>
                                <div className='balance'>
                                    <h1>$ {(session?.balance !== undefined ? session.balance.toFixed(2) : "0.00")}</h1>
                                    <h1>Account Balance</h1>
                                </div>
                            </div>
                            <div className='prof-sub-child'>
                                <div className='balance'>
                                    <h1>$ {(session?.balance !== undefined ? session.today_commission.toFixed(2) : "0.00")}</h1>
                                    <h1>Profit</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='side-bar-har-list-parent'>
                        <div className='side-bar-har-list-child'>
                            <Popup trigger={
                                <div className='list-card-parent'>
                                    <div className='list-card-chid'>
                                        <div className='card-img'>
                                            <Image
                                                src={icon1}
                                                alt='icon'
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className='card-name'>
                                            <h3>T&C</h3>
                                        </div>
                                    </div>
                                </div>
                            } position="right center" modal nested>
                                {close => (
                                    <div className="modal model-side">
                                        <div className='nav-bar nav-bar-side'>
                                            <h1>Terms & conditions</h1>
                                            <button onClick={close}>&times;</button>
                                        </div>
                                        <div className="content content-side">
                                            <Tc data={content} />
                                        </div>
                                    </div>
                                )}
                            </Popup>
                            <Popup trigger={
                                <div className='list-card-parent'>
                                    <div className='list-card-chid'>
                                        <div className='card-img'>
                                            <Image
                                                src={icon2}
                                                alt='icon'
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className='card-name'>
                                            <h3>Agent</h3>
                                        </div>
                                    </div>
                                </div>
                            } position="right center" modal nested>
                                {close => (
                                    <div className="modal model-side">
                                        <div className='nav-bar nav-bar-side'>
                                            <h1>Agent</h1>
                                            <button onClick={close}>&times;</button>
                                        </div>
                                        <div className="content content-side">
                                            <Agent data={content} />
                                        </div>
                                    </div>
                                )}
                            </Popup>
                            <Popup trigger={
                                <div className='list-card-parent'>
                                    <div className='list-card-chid'>
                                        <div className='card-img'>
                                            <Image
                                                src={icon3}
                                                alt='icon'
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className='card-name'>
                                            <h3>FAQs</h3>
                                        </div>
                                    </div>
                                </div>
                            } position="right center" modal nested>
                                {close => (
                                    <div className="modal model-side">
                                        <div className='nav-bar nav-bar-side'>
                                            <h1>FAQs</h1>
                                            <button onClick={close}>&times;</button>
                                        </div>
                                        <div className="content content-side">
                                            <Faq data={content} />
                                        </div>
                                    </div>
                                )}
                            </Popup>
                            <Popup trigger={
                                <div className='list-card-parent'>
                                    <div className='list-card-chid'>
                                        <div className='card-img'>
                                            <Image
                                                src={icon4}
                                                alt='icon'
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className='card-name'>
                                            <h3>Intro</h3>
                                        </div>
                                    </div>
                                </div>
                            } position="right center" modal nested>
                                {close => (
                                    <div className="modal model-side">
                                        <div className='nav-bar nav-bar-side'>
                                            <h1>About Fora™</h1>
                                            <button onClick={close}>&times;</button>
                                        </div>
                                        <div className="content content-side">
                                            <About data={content} />
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div>

                <div className="side-bar-lists">
                    <ul>
                        {/* <Link href="/dashboard/journey">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon5}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Begin Explore</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link> */}
                        {/* <Link href="/dashboard/recharge">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon6}
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
                        </Link> */}
                        {/* <Link href="/dashboard/withdrawal">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon7}
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
                        </Link> */}
                        {/* <Link href="/dashboard/invite">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon8}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Referral Code</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link> */}
                        <Link href="/dashboard/history">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon9}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Explore History</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        {/* <Link href="">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon10}
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
                        </Link> */}
                        <Link href="/dashboard/recovery/changePassword">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon11}
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
                        {/* <Link href="/dashboard/transactions">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon12}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Transactions</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link> */}
                        <Link href="/dashboard/support">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={icon13}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Customer Service</p>
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
                                        src={icon14}
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
                        <Link href="/dashboard/membership">
                            <li>
                                <div className="side-bar-list">
                                    <Image
                                        src={notifiicon}
                                        alt="icon"
                                        width={100}
                                        height={100}
                                    />
                                    <p>Notification</p>
                                </div>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </li>
                        </Link>
                        <div className="logout-style" onClick={toggleModal}>
                            <div className='logout-parent'>
                                <div className="side-bar-list">
                                </div>
                            </div>
                            <div className='logout-parent'>
                                <div className="side-bar-list">
                                    <p>Logout</p>
                                    <div className="App">
                                        {isModalOpen && (
                                            <div className="modal">
                                                <div className="modal-content">
                                                    <p>Are you sure you want to logout?</p>
                                                    <div className='yesno'>
                                                        <button onClick={() => handleLogout()}>Yes</button>
                                                        <button onClick={toggleModal}>No</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='logout-parent'>
                                <div className="side-bar-list">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </ul>
                    <div className='copy-right-parent'>
                        <div className='copy-right-child'>
                            <p className="sidebar-copyright">Copyright © 2024 Original Travel . All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Sidebar