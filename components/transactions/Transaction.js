"use client";

import { useState } from "react";
import data_not_found from "@/public/not_found.png";
import Image from "next/image";
import moment from "moment";
import { useEffect } from "react";

const History = ({ history, withdrawal }) => {

    const [activeTab, setActiveTab] = useState('Account');

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const combinedData = [...history, ...withdrawal];
        const sortedData = combinedData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setAllData(sortedData)

    }, [])


    return (
        <>
            <div className="transactions-wrapper">
                <div className="history-filter">
                    <ul>
                        <li><button onClick={() => setActiveTab('Account')} className={activeTab === "Account" ? "history-active" : ""}>Account</button></li>
                        <li><button onClick={() => setActiveTab('Reload')} className={activeTab === "Reload" ? "history-active" : ""}>Reload</button></li>
                        <li><button onClick={() => setActiveTab('Withdraw')} className={activeTab === "Withdraw" ? "history-active" : ""}>Withdraw</button></li>
                    </ul>
                </div>
                <div className="menu-divider"></div>


                {
                    activeTab === 'Account'
                        ?
                        <>
                            {
                                allData?.length === 0
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
                                    allData?.map((data, index) => (
                                        <div className="transactions-parent" key={index}>
                                            <div className="transactions-child">
                                                <h1>{moment(data?.createdAt).format("YYYY-MM-DD | h:mm A")}</h1>
                                            </div>
                                            <div className="transactions-child">
                                                <p>Subordinate Returned Profit</p>
                                            </div>
                                            <div className="transactions-child">
                                                <h2>$ {data.amount}{data.withdrawal_amount}</h2>
                                            </div>
                                        </div>
                                    )).reverse()
                            }
                        </>
                        :
                        activeTab === 'Reload'
                            ?
                            <>
                                {
                                    history?.length === 0
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
                                        history?.map((data, index) => (
                                            <div className="transactions-parent" key={index}>
                                                <div className="transactions-child">
                                                    <h1>{moment(data?.createdAt).format("YYYY-MM-DD | h:mm A")}</h1>
                                                </div>
                                                <div className="transactions-child">
                                                    <p>Subordinate Returned Profit</p>
                                                </div>
                                                <div className="transactions-child">
                                                    <h2>$ {data.amount}</h2>
                                                </div>
                                            </div>
                                        )).reverse()
                                }
                            </>
                            :
                            activeTab === 'Withdraw'
                                ?
                                <>
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
                                                <div className="transactions-parent" key={index}>
                                                    <div className="transactions-child">
                                                        <h1>{moment(data?.createdAt).format("YYYY-MM-DD | h:mm A")}</h1>
                                                    </div>
                                                    <div className="transactions-child">
                                                        <p>Subordinate Returned Profit</p>
                                                    </div>
                                                    <div className="transactions-child">
                                                        <h2>$ {data.withdrawal_amount}</h2>
                                                    </div>
                                                </div>
                                            )).reverse()
                                    }
                                </>
                                :
                                <></>
                }

            </div>
        </>
    )
}

export default History
