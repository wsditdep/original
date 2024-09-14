"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import logo from "@/public/logo.png";
import successImg from "@/public/success/success_svg.svg";
import Image from 'next/image';
import Link from 'next/link';
import SuccessModal from '../successModal/SuccessModal';
import { useEffect, useState } from 'react';
import { withdrawal } from '@/app/actions/user/action';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

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

    useEffect(() => {
        if (withdrawalInfo?.status === "pending") {
            setIsSuccess(true);
        }
    }, []);

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
                    <div className="transaction-box-logo">
                        <Image
                            src={logo}
                            height={100}
                            width={100}
                            alt="logo"
                            unoptimized
                        />
                    </div>
                    <div className="transaction-current-balance">
                        <p>Current Balance</p>
                        <h3>${user?.balance?.toFixed(2) ?? 0}</h3>
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
                            <form action={handleForm}>
                                <div className="withdrawal-input">
                                    {/* <label>Enter Amount to withdraw</label> */}
                                    <input
                                        type="number"
                                        placeholder="withdraw amount"
                                        name="amount"
                                        step="any"
                                        required
                                        onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                    />
                                </div>
                                <div className="withdrawal-input">
                                    {/* <label>Withdrawal Password</label> */}
                                    <input
                                        type="password"
                                        placeholder="Withdrawal Password"
                                        name="withdrawal_pin"
                                        required
                                        onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                                    />
                                </div>
                                <div className="wallet-info-slip">
                                    <h4>WITHDRAW TO</h4>
                                    <div className="wallet-info-parent">
                                        <h3>Recipient Name</h3>
                                        <p>{user?.wallet_name}</p>
                                    </div>
                                    <div className="wallet-info-parent">
                                        <h3>Recipient Network</h3>
                                        <p>{user?.network_type}</p>
                                    </div>
                                    <div className="wallet-info-parent">
                                        <h3>Recipient Wallet Address</h3>
                                        <p>{user?.wallet_address}</p>
                                    </div>
                                    <div className="amount-submit-btn">
                                        <button className="btn global-primary-btn">Withdraw Now</button>
                                    </div>
                                </div>
                            </form>
                        </>
                }
            </section >
        </>
    )
}

export default Withdrawal