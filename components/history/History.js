"use client";

import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import data_not_found from "@/public/not_found.png";
import Link from "next/link";

import icon6 from "@/public/home-page/icon6.png";


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
                            <div className="journey-history-card-container" key={index}>
                                <div className="journey-history-card-parent">

                                    <div className="journey-history-card-child">
                                        <div className="card-sub-child">
                                            <div className="card-date">
                                                <p>{moment(data?.createdAt).format("Do MMM YYYY, h:mm a")}</p>
                                            </div>
                                            <div className="card-status">
                                                <button>{data?.status}</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="journey-history-card-child">
                                        <div className="card-sub-child">
                                            <div className="product-detaile">
                                                <div className="product-img">
                                                    {
                                                        data && data.url && (
                                                            <Image
                                                                src={data.url}
                                                                alt="logo"
                                                                height={100}
                                                                width={100}
                                                                unoptimized
                                                            />
                                                        )
                                                    }
                                                </div>
                                                <div className="product-price">
                                                    <p>{data?.productName}</p>
                                                    <p>$ {data?.productPrice?.toFixed(2)}</p>
                                                </div>
                                            </div>

                                            {
                                                data?.status === "completed"
                                                    ?
                                                    <></>
                                                    :
                                                    <div className="submit-btn">
                                                        <Link href="/dashboard/journey/submitJourney">
                                                            <button>Continue</button>
                                                        </Link>
                                                    </div>
                                            }


                                        </div>
                                    </div>
                                    <div className="journey-history-card-child">
                                        <div className="card-sub-child">
                                            <div className="all-amounts">
                                                <div className="amount">
                                                    <p>Price</p>
                                                    <p>$ {data?.productPrice?.toFixed(2)}</p>
                                                </div>
                                                <div className="amount">
                                                    <p>Comm</p>
                                                    {
                                                        data?.isJourneyProduct
                                                            ?
                                                            <p>$ {(data?.productPrice * membership?.ticket_commission)?.toFixed(2)}</p>
                                                            :
                                                            <p>$ {(data?.productPrice * membership?.commission_rate)?.toFixed(2)}</p>

                                                    }
                                                </div>
                                                <div className="amount">
                                                    <p>Total Return</p>
                                                    {
                                                        data?.isJourneyProduct
                                                            ?
                                                            <p>$ {(data?.productPrice + (data?.productPrice * membership?.ticket_commission)).toFixed(2)}</p>
                                                            :
                                                            <p>$ {(data?.productPrice + (data?.productPrice * membership?.commission_rate)).toFixed(2)}</p>

                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))
                }
                <div className="welcome-footer-container">
                    <div className="welcome-footer">
                        <p>Copyright © 2024 Ausventure . All Rights Reserved.</p>
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
        </>
    )
}

export default History