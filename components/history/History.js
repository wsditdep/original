"use client";

import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import data_not_found from "@/public/not_found.png";
import Link from "next/link";

const History = ({ data, membership }) => {

    const [allProducts, setAllProducts] = useState(data || []);
    const [statusType, setStatusType] = useState("all");
    

    const handleFilter = (filterType) => {
        if (filterType === "all") {
            setAllProducts(data)
            setStatusType("all");
        } else if (filterType === "pending") {
            const pendingProducts = data?.filter(product => product.status === "pending");
            setAllProducts(pendingProducts);
            setStatusType("pending");
        } else if (filterType === "completed") {
            const completedProducts = data?.filter(product => product.status === "completed");
            setAllProducts(completedProducts);
            setStatusType("completed");
        } else if (filterType === "freezed") {
            const completedProducts = data?.filter(product => product.status === "freezed");
            setAllProducts(completedProducts);
            setStatusType("freezed");
        }
    }

    return (
        <>
            <div className="history-filter">
                <ul>
                    <li><button onClick={() => handleFilter("all")} className={statusType === "all" ? "history-active" : ""}>All</button></li>
                    <li><button onClick={() => handleFilter("pending")} className={statusType === "pending" ? "history-active" : ""}>Pending</button></li>
                    <li><button onClick={() => handleFilter("completed")} className={statusType === "completed" ? "history-active" : ""}>Completed</button></li>
                    {/* <li><button onClick={() => handleFilter("freezed")} className={statusType === "freezed" ? "history-active" : ""}>Freezed</button></li> */}
                </ul>
            </div >
            <div className="journey-history-card-wrapper">

                {
                    allProducts?.length === 0
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
                        allProducts?.map((data, index) => (
                            <div className="journey-history-card" key={index}>
                                <div className="journey-history-overlay"></div>
                                <div className="journey-history-status"><p>{data?.status}</p></div>
                                <div className="journey-history-content">
                                    <div className="history-info-parent">
                                        <div className="history-info-childs">
                                            <p>{moment(data?.createdAt).format("Do MMM YYYY, h:mm a")}</p>
                                        </div>
                                        <div className="history-info-childs">
                                            <div className="dolar-container">
                                                <i className="fa fa-dollar"></i>
                                            </div>
                                            <h6> {data?.productPrice?.toFixed(2)}</h6>
                                        </div>
                                    </div>
                                    <div className="history-info-parent">
                                        <div className="history-info-childs">
                                            <h3>{data?.productName}</h3>
                                        </div>
                                        <div className="history-info-childs">

                                        </div>
                                    </div>
                                    <div className="history-line-break"></div>
                                    <div className="history-info-parent">
                                        <div className="history-info-childs">
                                            <h1>Total Amount</h1>
                                        </div>
                                        <div className="history-info-childs">
                                            {
                                                data?.isJourneyProduct
                                                    ?
                                                    <h1>$ {(data?.productPrice + (data?.productPrice * membership?.ticket_commission)).toFixed(2)}</h1>
                                                    :
                                                    <h1>$ {(data?.productPrice + (data?.productPrice * membership?.commission_rate)).toFixed(2)}</h1>

                                            }
                                        </div>
                                    </div>
                                    <div className="history-info-parent">
                                        <div className="history-info-childs">
                                            <h1>Commission</h1>
                                        </div>
                                        <div className="history-info-childs">
                                            {
                                                data?.isJourneyProduct
                                                    ?
                                                    <h1>$ {(data?.productPrice * membership?.ticket_commission)?.toFixed(2)}</h1>
                                                    :
                                                    <h1>$ {(data?.productPrice * membership?.commission_rate)?.toFixed(2)}</h1>

                                            }
                                        </div>
                                    </div>
                                    {
                                        data?.status === "completed"
                                            ?
                                            <></>
                                            :
                                            <div className="history-info-parent">
                                                <Link href="/dashboard/journey/submitJourney">
                                                    <button>Submit</button>
                                                </Link>
                                            </div>
                                    }

                                </div>
                                <div className="card-bg-image">
                                    {
                                        data && data.url && (
                                            <Image
                                                src={data.url}
                                                height={100}
                                                width={100}
                                                alt="logo"
                                                unoptimized
                                            />
                                        )
                                    }

                                </div>

                            </div>
                        ))
                }
            </div>
        </>
    )
}

export default History
