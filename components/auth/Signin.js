"use client";

import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { authenticate } from '@/app/actions/user/action';
import { useFormStatus } from "react-dom";
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/originaltravel_image/OriginalTravel-Logo-01.png";


function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Please Wait..." : "Login Now"}</button>
        </>
    )
}

const Signin = ({ setIsLogin }) => {

    const { push } = useRouter();

    const handleForm = async (formData) => {
        try {
            const response = await authenticate(formData);

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


            <div className="app-global-form">
                <div className="auth-breadcrumb-parent">
                    <div className="auth-breadcrumb-childs">
                        <h3>Login Now</h3>
                    </div>
                </div>
                <form action={handleForm}>
                    <div className="app-form-group app-form-group-include-conf">
                        <div className='app-form-inputs'>
                            <label>Username</label>
                            <input
                                type="text"
                                placeholder="Type Username"
                                name="username"
                                required
                            />
                        </div>
                    </div>
                    <div className="app-form-group app-form-group-include-conf">
                        <div className='app-form-inputs'>
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Type Password"
                                name="password"
                                required
                            />
                        </div>
                    </div>
                    <div className="app-form-action">
                        <Submit />
                        <div className='text'>
                            <h3>Not a member?</h3>
                        </div>
                        <div className='reg-account'>
                            <h4 onClick={() => setIsLogin(true)}>Register Now</h4>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin