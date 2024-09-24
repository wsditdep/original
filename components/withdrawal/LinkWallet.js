"use client";

import { useFormStatus } from "react-dom";
import { createWallet } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import icon6 from "@/public/home-page/icon6.png";
import Image from "next/image";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Submitting..." : "Confirm"}</button>
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

            console.log(selectVal)

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
            <section className="link-wallet-section">

                <div className="wallet-section-wrapper">
                    <form action={handleForm}>
                        <div className="wallet-section-parent">
                            <div className="wallet-head-content">
                                <p>Dear user to protect your funds, please make sure
                                    you enter the correct and completed information</p>
                            </div>
                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Full Name</p>
                                    <input
                                        type="text"
                                        placeholder="Type Full Name"
                                        name="wallet_name"
                                        required
                                        onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                </div>
                            </div>

                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Wallet Address</p>
                                    <input
                                        type="text"
                                        placeholder="Type Wallet Address"
                                        name="wallet_address"
                                        required onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                </div>
                            </div>

                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Currency</p>
                                    <div className="radio-group">
                                        <label onChange={(e) => setSelectVal(e.target.value)}>
                                            <input type="radio" name="currency_type" value="USDT" />
                                            <span>USDT</span>
                                        </label>

                                        <label onChange={(e) => setSelectVal(e.target.value)}>
                                            <input type="radio" name="currency_type" value="USDC" />
                                            <span>USDC</span>
                                        </label>

                                        <label onChange={(e) => setSelectVal(e.target.value)}>
                                            <input type="radio" name="currency_type" value="EDH" />
                                            <span>ETH</span>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Network</p>
                                    <div className="radio-group">
                                        <label onChange={(e) => setSelectVal(e.target.value)}>
                                            <input type="radio" name="network_type" value="TRC 20" />
                                            <span>TRC20</span>
                                        </label>

                                        <label onChange={(e) => setSelectVal(e.target.value)}>
                                            <input type="radio" name="network_type" value="ERC 20" />
                                            <span>ERC20</span>
                                        </label>

                                        <label onChange={(e) => setSelectVal(e.target.value)}>
                                            <input type="radio" name="network_type" value="BTC" />
                                            <span>BTC</span>
                                        </label>
                                    </div>
                                </div>
                            </div>



                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <p>Phone No</p>
                                    <input
                                        type="number"
                                        placeholder="Type Phone No"
                                        name="phone_number"
                                        required onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }} />
                                </div>
                            </div>




                            <div className="wallet-section-child">
                                <div className="wallet-sub-child">
                                    <div className="app-form-group">
                                        <Submit />
                                    </div>
                                </div>
                            </div>
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


            </section>
        </>
    )
}

export default LinkWallet