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
            <Breadcrumb title="Security" link="/dashboard" />
            <section className="auth-section bgColor">
                <div className="auth-wrapper security-crenter-wrapper">
                    <div className="auth-login-logo">
                        <Image
                            src={securityImg}
                            height={100}
                            width={100}
                            alt="logo"
                            unoptimized
                        />
                    </div>
                    <div className="auth-info">
                        <h3>Security Center </h3>
                        <p>Change your PIN credential</p>
                    </div>
                    <div className="security-tab">
                        <Link href="/dashboard/recovery/changePassword">
                            <button>Security PIN</button>
                        </Link>
                        <Link href="/dashboard/recovery/changePin">
                            <button className="security-tab-active">Withdrawal PIN</button>
                        </Link>
                    </div>
                    <div className="app-global-form">
                        <form action={handleForm}>
                            <div className="app-form-group app-form-group-include-conf">
                                <label>Old Password</label>
                                <input
                                    type={isShow ? "test" : "password"}
                                    placeholder="Password"
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
                            <div className="app-form-group app-form-group-include-conf">
                                <label>New Password</label>
                                <input
                                    type={isShow ? "test" : "password"}
                                    placeholder="Password"
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
                            <div className="app-form-group app-form-group-include-conf">
                                <label>Confirm Password</label>
                                <input
                                    type={isShow ? "test" : "password"}
                                    placeholder="Password"
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

export default ChangePin;