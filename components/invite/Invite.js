"use client";

import Breadcrumb from "../breadcrumb/Breadcrumb";
import toast from "react-hot-toast";
import QRCode from 'qrcode.react';
import { useState } from "react";

const Invite = ({ user }) => {

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    const [text, setText] = useState(process.env.NEXT_PUBLIC_REGISTER_URL || "");

    return (
        <>
            <Breadcrumb title="Invitation" link="/dashboard" />
            <section className="invitation-section">
                <div className="inviattion-code-wrapper">
                    <div className="invitation-qr-wrapper">
                        <p>Profile Referral Code</p>
                        <h3 onClick={() => copyToClipboard(user?.invitation_code ?? "")}>{user?.invitation_code ?? ""} <i className="fa fa-file-alt"></i></h3>
                        <QRCode value={text} size={256} />
                    </div>
                </div>
                {/* <div className="your-referral-code">
                    <h2>Your Referral Code</h2>
                    <div className="referral-code-show">
                        <p>{user?.invitation_code ?? ""}</p>
                        <h6 >Tap to copy</h6>
                    </div>
                    <div className="submit-btn mt1">
                        <button onClick={() => copyToClipboard(user?.invitation_code ?? "")} className="btn global-primary-btn">Share Invitation Code</button>
                    </div>
                </div> */}
            </section>
        </>
    )
}

export default Invite;