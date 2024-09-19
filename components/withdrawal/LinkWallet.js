"use client";

import { useFormStatus } from "react-dom";
import { createWallet } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import icon6 from "@/public/journey-page/icon6.png";
import Image from "next/image";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Submitting..." : "Link Wallet Now"}</button>
        </>
    )
}

const LinkWallet = ({ user }) => {
    const { push } = useRouter();

    const [selectVal, setSelectVal] = useState("TRC 20");

    const handleForm = async (formData) => {
        try {

            formData.append("id", user?._id);
            formData.append("network_type", selectVal);

            const response = await createWallet(formData);

            if (response.status === 201) {
                toast.success(response.message);
                push('/dashboard/withdrawal');
                return;
            } else {
                return toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Breadcrumb title="Wallet Info" link="/dashboard" />
            <section className="auth-section bgColor">
                <div className="auth-wrapper">
                    <div className="wallet-info">
                        <p>Dear user to protect your funds, please make sure
                            you enter the correct and completed information</p>
                    </div>
                    <div className="wallet-global-form">
                        <form action={handleForm}>
                            <div className="wallet-form-group">
                                {/* <label>Full Name</label> */}
                                <input
                                    type="text"
                                    placeholder="Type Full Name"
                                    name="wallet_name"
                                    required
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                />
                            </div>
                            <div className="wallet-form-group">
                                {/* <label>Wallet Address</label> */}
                                <input
                                    type="text"
                                    placeholder="Type Wallet Address"
                                    name="wallet_address"
                                    required
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                />
                            </div>
                           
                          
                            <div className="wallet-form-group">
                                {/* <label>Network Type</label> */}
                                <select onChange={(e) => setSelectVal(e.target.value)}>
                                    <option value="TRC 20">TRC 20</option>
                                    <option value="ERC 20">ERC 20</option>
                                    <option value="BTC">BTC</option>
                                </select>
                            </div>
                             <div className="wallet-form-group">
                                {/* <label>Phone Number</label> */}
                                <input
                                    type="text"
                                    placeholder="Type Phone No."
                                    name="wallet_name"
                                    required
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                />
                            </div>
                            <div className="app-form-group">
                                <Submit />
                            </div>
                        </form>
                    </div>
                   
                  <div className="welcome-footer-container">
                    <div className="welcome-footer">
                      <p>Copyright © 2024 Ausventure . All Rights Reserved.</p>
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
            </section>
        </>
    )
}

export default LinkWallet