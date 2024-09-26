'use client'

import { useEffect, useState } from "react";


const CirclerProgress = ({user}) => {
    console.log(user)
    const [floatNumber, setPercentage] = useState(0);

    useEffect(()=>{
       
            const totalAvailableOrder = user.daily_available_order;
            const todayCompletedOrder = user.today_order;
            setPercentage((100 / totalAvailableOrder ) * todayCompletedOrder);

    }, [user]);

    const percentage = Math.floor(floatNumber);

    return (
        <div className="progress-container">
            <svg className="progress-circle" viewBox="0 0 36 36">
                <path
                    className="circle-bg"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                    className="circle"
                    strokeDasharray={`${percentage}, 100`}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{`${percentage}%`}</text>
            </svg>
        </div>
    );
}

export default CirclerProgress;
