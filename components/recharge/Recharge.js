"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import logo from "@/public/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import bgimg from "@/public/home-page/bgimg.png"


const Recharge = ({ user }) => {
    const amounts = [
        { value: "$ 50.00", numericValue: 50 },
        { value: "$ 100.00", numericValue: 100 },
        { value: "$ 200.00", numericValue: 200 },
        { value: "$ 1000.00", numericValue: 1000 },
        { value: "$ 3000.00", numericValue: 3000 },
        { value: "Others", numericValue: 0 }
    ];

    const [amountData, setAmountData] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index, numericValue) => {
        setActiveIndex(index);
        setAmountData(numericValue);
    };

    const handleInputChange = (event) => {
        setAmountData(Number(event.target.value));
        setActiveIndex(null); // Reset the active index if user types in a custom amount
    };

    return (
        <>
            <Breadcrumb title="Recharge" link="/dashboard" activeRechargeHistory={true} />
            <section className="transaction-section">
                <div className="transaction-box-wrapper">
                    <div className="transaction-box-logo">
                        <div className='bg-img-recharge'>
                            <Image
                                src={bgimg}
                                alt='img'
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                    </div>
                    <div className="transaction-current-balance">
                        <p>Account Balance</p>
                        <h3>$ {user?.balance?.toFixed(2)}</h3>
                    </div>
                </div>
                <div className="withdrawal-input">
                    <label>Enter Amount to recharge</label>
                    <input
                        type="number"
                        placeholder="Enter the recharge amount"
                        value={amountData === 0 ? "" : amountData}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="amount-options">
                    <div className="amount-option-parent">
                        {amounts.map((amount, index) => (
                            <div
                                className={`amount-option-childs ${activeIndex === index ? 'active-deposit-btn' : ''}`}
                                key={index}
                                onClick={() => handleClick(index, amount.numericValue)}
                            >
                                <h3>{amount.value}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="amount-submit-btn">
                    <Link href="/dashboard/support">
                        <button className="btn global-primary-btn">Deposit Now</button>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Recharge;
