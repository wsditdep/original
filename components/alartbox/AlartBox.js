"use client"

import Image from 'next/image'
import React from 'react'
// import logo from "@/public/welcome/logo.png";
import logo from "@/public/originaltravel_image/OriginalTravel-Logo-01.png";

function AlartBox({ setIsSuccess, message }) {

    return (
        <>
            <div className="alart-container">
                <div className="alart-parent">
                    <div className="alart-child">
                        <div className="close-btn" onClick={() => setIsSuccess(false)}><i className="fa-solid fa-xmark"></i></div>
                    </div>
                    <div className="alart-child">
                        <Image
                            src={logo}
                            alt="logo"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="alart-child">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlartBox