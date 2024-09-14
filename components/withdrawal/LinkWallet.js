"use client";

import { useFormStatus } from "react-dom";
import { createWallet } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Breadcrumb from "../breadcrumb/Breadcrumb";

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
                        <h3>Link Crypto Wallet</h3>
                    </div>
                    <div className="wallet-global-form">
                        <form action={handleForm}>
                            <div className="wallet-form-group">
                                {/* <label>Full Name</label> */}
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    name="wallet_name"
                                    required
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                />
                            </div>
                            <div className="wallet-form-group">
                                {/* <label>Phone Number</label> */}
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    name="wallet_name"
                                    required
                                    onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                />
                            </div>
                            <div className="wallet-form-group">
                                {/* <label>Wallet Address</label> */}
                                <input
                                    type="text"
                                    placeholder="Enter wallet address"
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
                            <div className="app-form-group">
                                <Submit />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LinkWallet