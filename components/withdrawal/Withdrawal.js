"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import successImg from "@/public/success/success_svg.svg";
import Image from 'next/image';
import Link from 'next/link';
import SuccessModal from '../successModal/SuccessModal';
import { useEffect, useState } from 'react';
import { withdrawal } from '@/app/actions/user/action';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useFormStatus } from "react-dom";

import bgimg from "@/public/home-page/bgimg.png"
import icon6 from "@/public/home-page/icon6.png";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Submitting..." : "Withdraw Now"}</button>
        </>
    )
}

const Withdrawal = ({ user, withdrawalInfo }) => {

    const router = useRouter();

    const [isSuccess, setIsSuccess] = useState(false);

    const handleForm = async (formData) => {
        try {
            const response = await withdrawal(formData);

            if (response.status === 201) {
                toast.success(response.message);
                setIsSuccess(true);
                router.refresh();
                return;
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const [allBalance, setAllBalance] = useState("")

    return (
        <>

            <Breadcrumb title="Withdraw" link="/dashboard" activeWithdrawalHistory={true} />
            {
                isSuccess
                    ?
                    <SuccessModal
                        title="Withdraw Successful"
                        subtitle="Pending for approval"
                        img={successImg}
                        redirect="/dashboard/withdrawalHistory"
                        setIsSuccess={setIsSuccess}
                    />
                    :
                    <></>
            }
            <section className="transaction-section">
                <div className="transaction-box-wrapper">
                    <div className="transaction-current-balance">
                        <p>Assets Balance</p>
                        <h3>USDT {user?.balance?.toFixed(2) ?? 0}</h3>
                        <h5>*You will receive your withdrawal within an hour</h5>
                    </div>
                    <div className='bg-img'>
                        <Image
                            src={bgimg}
                            alt='img'
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                </div>
                {
                    user?.network_type === null
                        ?
                        <>
                            <div className="link-wallet-wrapper">
                                <div className="link-wallet">
                                    <i className="fa fa-wallet"></i>
                                </div>
                                <div className="link-wallet-info">
                                    <h1>Link Wallet</h1>
                                    <p>You must link  your wallet first before any withdrawal</p>
                                </div>
                            </div>
                            <div className="amount-submit-btn">
                                <Link href="/dashboard/withdrawal/linkwallet">
                                    <button className="btn global-primary-btn">Link Wallet</button>
                                </Link>
                            </div>
                        </>
                        :
                        <>
                            <div className='wallet-info-parent'>
                                <div className='wallet-info-child'>
                                    <h1>Wallet Balance</h1>
                                    <p>$ {user?.balance?.toFixed(2) ?? 0}</p>
                                </div>
                                <div className='wallet-info-child'>
                                    <h1>Withdrawal Method</h1>
                                    <h2>Transfer to Bank</h2>
                                    <h2>{user?.wallet_name}</h2>
                                    <h2>{user?.wallet_address}</h2>
                                    <h2>{user?.network_type}</h2> 
                                    {/* <h2>{user?.currency}</h2>   */}
                                </div>
                            </div>


                            <form action={handleForm}>
                                <div className="withdrawal-input">
                                    <p>Withdrawal Amount</p>
                                    <div className='input-parent'>
                                        <div className='input-child'>
                                            <input
                                                type="number"
                                                placeholder="Type Withdrawal Amount"
                                                name="amount"
                                                step="any"
                                                required
                                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                                value={allBalance}
                                                onChange={(e)=>setAllBalance(e.target.value)}
                                            />
                                        </div>
                                        <div className='input-child'>
                                            <h1 onClick={()=>setAllBalance(user?.balance?.toFixed(2) ?? 0)}>All</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="withdrawal-input">
                                    <p>Withdraw PIN</p>
                                    <div className='input-parent'>
                                        <div className='input-child'>
                                            <input
                                                type="password"
                                                placeholder="Type Withdraw PIN"
                                                name="withdrawal_pin"
                                                required
                                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="amount-submit-btn">
                                    <Submit />
                                </div>
                            </form>
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
                        </>
                }



            </section >
        </>
    )
}

export default Withdrawal