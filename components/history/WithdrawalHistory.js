import React from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import moment from 'moment';
import data_not_found from "@/public/not_found.png";
import Image from 'next/image';

const WithdrawalHistory = ({ withdrawal }) => {

    return (
        <>
            <Breadcrumb title="Withdraw History" link="/dashboard" />
            <section className="withdrawal-hostory-section">
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
                            <div className="withdraw-history-card mt2" key={index}>
                                <div className="withdraw-history-card-header">
                                    <div className="withdraw-history-card-header-childs">
                                        <h1>Transfer to wallet</h1>
                                        <p>{moment(data?.createdAt).format("Do MMM YYYY, h:mm a")}</p>
                                    </div>
                                    <div className="withdraw-history-card-header-childs">
                                        <h4>{data?.status}</h4>
                                    </div>
                                </div>
                                <div className="withdrawal-hostory-info">
                                    <div className="withdrawal-hostory-info-childs">
                                        <h6>Recipient Name</h6>
                                        <p>{data?.wallet_name}</p>
                                    </div>
                                    <div className="withdrawal-hostory-info-childs">
                                        <h6>Recipient Network</h6>
                                        <p>{data?.network_type}</p>
                                    </div>
                                    <div className="withdrawal-hostory-info-childs">
                                        <h6>Recipient Amount</h6>
                                        <p>{data?.withdrawal_amount}</p>
                                    </div>
                                </div>
                                <div className="withdrawal-hostory-footer">
                                    <h3>Recipient Wallet Address</h3>
                                    <h2>{data?.wallet_address}</h2>
                                </div>
                            </div>
                        )).reverse()

                }
            </section>
        </>
    )
}

export default WithdrawalHistory