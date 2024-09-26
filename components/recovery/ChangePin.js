"use client";

import Link from "next/link";
import { useState } from 'react';
import Image from "next/image";
import { useFormStatus } from "react-dom";
import securityImg from "@/public/forgot-password.png";
import { resetPin } from "@/app/actions/user/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import icon6 from "@/public/home-page/icon6.png";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Submitting..." : "Change Withdrawal PIN"}</button>
        </>
    )
}

const ChangePin = () => {
    const { push } = useRouter();

    const [isShow, setIsShow] = useState(false);

    const handleForm = async (formData) => {
        try {
            const response = await resetPin(formData);

            if (response.status === 201) {
                toast.success(response.message);
                push('/dashboard');
                return;
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="auth-section-parent">
                <Breadcrumb title="Security" link="/dashboard" />
                <section className="auth-section bgColor">

                    <div className="auth-wrapper security-crenter-wrapper">
                        <div className="security-tab">
                            <Link href="/dashboard/recovery/changePassword">
                                <button>Login Password</button>
                            </Link>
                            <Link href="/dashboard/recovery/changePin">
                                <button className="security-tab-active">Withdrawal PIN</button>
                            </Link>
                        </div>
                        <div className="security-tab-parent">
                        </div>
                        <div className="security-section-parent">
                            <form action={handleForm}>
                                <div className="security-section-child">
                                    <div className="sec-label-parent">
                                        <div className="sec-label-child">
                                            <label>Old Password</label>

                                        </div>
                                        <div className="sec-label-child">
                                            <input
                                                type={isShow ? "test" : "password"}
                                                placeholder="Type Password"
                                                name="old_pin"
                                                required
                                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                                className="in2"
                                            />
                                            {
                                                isShow
                                                    ?
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye"></i>
                                                    :
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye-slash"></i>
                                            }
                                        </div>

                                    </div>
                                    <div className="sec-label-parent">
                                        <div className="sec-label-child">
                                            <label>New Password</label>

                                        </div>
                                        <div className="sec-label-child">
                                            <input
                                                type={isShow ? "test" : "password"}
                                                placeholder="Type Password"
                                                name="new_pin"
                                                required
                                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                                className="in2"
                                            />
                                            {
                                                isShow
                                                    ?
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye"></i>
                                                    :
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye-slash"></i>
                                            }
                                        </div>

                                    </div>
                                    <div className="sec-label-parent">
                                        <div className="sec-label-child">
                                            <label>Confirm Password</label>

                                        </div>
                                        <div className="sec-label-child">
                                            <input
                                                type={isShow ? "test" : "password"}
                                                placeholder="Type Password"
                                                name="confirm_pin"
                                                required
                                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                                className="in2"
                                            />
                                            {
                                                isShow
                                                    ?
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye"></i>
                                                    :
                                                    <i onClick={() => setIsShow(!isShow)} className="fa fa-eye-slash"></i>
                                            }
                                        </div>

                                    </div>
                                    <div className="app-form-group">
                                        <Submit />
                                    </div>

                                </div>
                            </form>
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

                </section>
            </div>
        </>
    )
}

export default ChangePin;