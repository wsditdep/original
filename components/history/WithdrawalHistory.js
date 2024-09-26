import React from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import moment from 'moment';
import data_not_found from "@/public/not_found.png";
import Image from 'next/image';
import Navbar from "@/components/navBar/Navbar";

const WithdrawalHistory = ({ withdrawal }) => {

    return (
        <>
            <Navbar />
            <Breadcrumb title="Withdraw History" link="/dashboard" />
            <section className="withdrawal-hostory-section">
                <div className='withdrawal-history-wrapper'>
                    <div className='total-records-tap'>
                        <p>{withdrawal.length} Records</p>
                    </div>
                    {
                        withdrawal?.length === 0
                            ?
                            <div className="data-not-found">
                                <Image
                                    src={data_not_found}
                                    height={100}
                                    width={100}
                                    alt="logo"
                                    unoptimized
                                />
                            </div>
                            :
                            withdrawal?.map((data, index) => (
                                <div className='withdrawal-history-container' key={index}>
                                    <div className='withdrawal-history-parent'>
                                        <div className='withdrawal-history-child'>
                                            <div className='withdrawal-history-sub-child'>
                                                <div className='history-top'>
                                                    <h1>{moment(data?.createdAt).format("YYYY-MM-DD | h:mm A")}</h1>
                                                    <button
                                                        className={
                                                            data?.status === "pending"
                                                                ? "bg-pending"
                                                                : data?.status === "approve"
                                                                    ? "bg-approve"
                                                                    : data?.status === "rejected"
                                                                        ? "bg-rejected"
                                                                        : "bg-approve"
                                                        }
                                                    >
                                                        {data?.status}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='withdrawal-history-child'>
                                            <div className='withdrawal-history-sub-child'>
                                                <div className='history-middle'>
                                                    <p>Transfer to Wallet</p>
                                                    <p>{data?.wallet_name}, {data?.wallet_address}, {data?.network_type}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='withdrawal-history-child'>
                                            <div className='withdrawal-history-sub-child'>
                                                <div className='history-end'>
                                                    <h3>$ {data?.withdrawal_amount}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )).reverse()}
                </div>





            </section >
        </>
    )
}

export default WithdrawalHistory