"use client";

import { createUser } from "@/app/actions/user/action";
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useFormStatus } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/originaltravel_image/OriginalTravel-Logo-01.png";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Please wait..." : "Next Step"}</button>
        </>
    )
}

const SignUp = ({setIsLogin}) => {

    const { push } = useRouter();

    const handleForm = async (formData) => {
        try {
            const response = await createUser(formData);

            if (response.status === 201) {
                toast.success(response.message);
                setIsLogin(false);
                return;
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-login-logo">
                <Image
                    src={logo}
                    height={100}
                    width={100}
                    alt="logo"
                    unoptimized
                />
            </div>
            <div className="app-global-form-alt">
                <form action={handleForm}>
                    <div className="app-form-group">
                        <div className='app-form-inputs'>
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder="Type Username"
                                name="username"
                                required
                            />
                            <input
                                type="hidden"
                                name="role"
                                value="user"
                            />
                        </div>
                    </div>
                    <div className="app-form-group">
                        <div className='app-form-inputs'>
                            <label>Phone No</label>
                            <input
                                type="number"
                                placeholder="Type Phone No"
                                name="phone_number"
                                required
                            />
                        </div>
                    </div>
                    <div className="app-form-group app-form-group-include-conf">
                        <div className='app-form-inputs'>
                            <label>Withdraw	PIN</label>
                            <input
                                type="password"
                                placeholder="Type Withdraw PIN"
                                name="withdrawal_pin"
                                required
                            />
                        </div>
                    </div>
                    {/* <div className="app-form-group app-form-group-include-conf">
                        <div className='app-form-inputs'>
                            <label>Confirm Withdraw	PIN</label>
                            <input
                                type="password"
                                placeholder="Type Withdraw PIN"
                                name="cwithdrawal_pin"
                                required
                            />
                        </div>
                    </div> */}
                    <div className="app-form-group app-form-group-include-conf">
                        <div className='app-form-inputs'>
                            <label>Login Password</label>
                            <input
                                type="password"
                                placeholder="Type Login Password"
                                name="password"
                                required
                            />
                        </div>
                    </div>
                    {/* <div className="app-form-group app-form-group-include-conf">
                        <div className='app-form-inputs'>
                            <label>Confirm Login Password</label>
                            <input
                                type="password"
                                placeholder="Type Login Password"
                                name="cpassword"
                                required
                            />
                        </div>
                    </div> */}
                    <div className="app-form-group">
                        <div className='app-form-inputs'>
                            <label>Referral	Code</label>
                            <input
                                type="text"
                                placeholder="Type Referral Code"
                                name="ref_code"
                                required
                            />
                        </div>
                    </div>
                    <div className="app-form-group">
                        <Submit />
                    </div>
                    <div className="app-form-group">
                        <div className='reg-account'>
                            <h4 onClick={() => setIsLogin(false)}>Login Back</h4>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}


export default SignUp