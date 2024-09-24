"use client";

import successImg from "@/public/success/success.gif";
import SuccessModal from '../successModal/SuccessModal';
import { submitJourney } from '@/app/actions/journey/action';
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "@/app/actions/journey/data";
import Image from "next/image";
import Loader from "../loader/Loader";
import Confetti from 'react-confetti';
import { useRouter } from "next/navigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Link from "next/link";
import blurbg from "@/public/journey-page/blurbg.png"

function Submit() {

    const { pending } = useFormStatus();

    return (
        <>

            <button type="submit" className={pending ? "btn global-primary-btn managedDisabled" : "btn global-primary-btn"}> {
                pending ?
                    <> Please wait... <i className="fa fa-spinner loading_animation"></i></>
                    :
                    `Submit`
            }
            </button>
        </>
    )
}

const SubmitJourney = () => {

    const { push } = useRouter();

    const [isSuccess, setIsSuccess] = useState(false);
    const [myState, setMyState] = useState({});
    const [loading, setLoading] = useState(true);

    const handleForm = async () => {
        try {
            const response = await submitJourney();

            if (response.status === 201) {
                toast.success(response.message);
                setIsSuccess(true);
                return;
            } else {
                toast.error(response.message);
                push("/dashboard/recharge");
            }

        } catch (error) {
            console.log(error)
        }
    }

    const handleProduct = async () => {
        setLoading(true);
        try {
            const response = await fetchProduct();
            setMyState(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        handleProduct();
    }, []);

    return (
        <>
            {
                isSuccess
                    ?
                    <SuccessModal setIsSuccess={setIsSuccess} img={successImg} redirect={"/dashboard/journey"} />
                    :
                    <></>
            }
            {
                loading
                    ?
                    <Loader />
                    :
                    <></>
            }
            {
                myState?.product?.isJourneyProduct
                    ?
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        numberOfPieces={200}
                    />
                    :
                    <></>
            }
            <section className="submit-journey-section"
            style={{
                backgroundImage: `url(${blurbg.src})`, 
                height: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
             }}
            >

                <div className="submit-journey-container-parent">

                    <div className="submit-journey-container-child">

                        <div className="submit-journey-wrapper">
                            <div className="submit-head-parent">
                                <div className="submit-head-child">
                                    <h2>Explore Hotels</h2>
                                </div>
                                <Link href="/dashboard/journey" >
                                <div className="submit-head-child">
                                <i className="fa-solid fa-xmark"></i>
                                </div></Link>
                            </div>
                            <div className="submit-journey-image-parent">
                                <div className="submit-journey-child">
                                    {
                                        myState && myState.product && (
                                            <Image
                                                src={myState?.product?.url ?? ""}
                                                height={100}
                                                width={100}
                                                alt="logo"
                                                unoptimized
                                            />
                                        )
                                    }
                                    <div className="submit-overlay"></div>
                                </div>
                                <div className="submit-journey-child">
                                    <h2>{myState?.product?.productName ?? ""}</h2>
                                    <p>Get your trip off to a great start
                                        with a stay at this property,
                                        which offers free Wi-Fi in all
                                        rooms. Strategically situated in
                                        Bukit Bintang…</p>
                                </div>
                            </div>
                            <div className="submit-journey-content-parent">
                                <div className="submit-journey-content-child">
                                    <div className="price-parent">
                                        <div className="price-child">
                                            <p>Price</p>
                                        </div>
                                        <div className="price-child">
                                            <h3>$ {myState?.product?.productPrice?.toFixed(2) ?? ""}</h3>
                                        </div>
                                    </div>
                                    <div className="price-parent">
                                        <div className="price-child">
                                            <p>Commission</p>
                                        </div>
                                        <div className="price-child">
                                            <h3>$ {myState?.commission?.toFixed(2) ?? ""}</h3>
                                        </div>
                                    </div>
                                    <div className="price-parent">
                                        <div className="price-child">
                                            <p>Explore Amount</p>
                                        </div>
                                        <div className="price-child">
                                            <h3>$ {myState?.totalValue?.toFixed(2) ?? ""}</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="rate-review-wrapper">
                            <div className="rate-task-parent">
                                <div className="rate-task-childs">
                                    <h3>Hotel Ratings</h3>
                                </div>
                                <div className="rate-task-childs">
                                    <ul>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="good-comments-parent">
                                <div className="good-comments-child">
                                    <h3>Comment Good Reviews</h3>
                                </div>
                                <div className="good-comments-child">
                                    <p>The movie is filled with amazing actors
                                        who truly make the film.</p>
                                </div>
                            </div>

                            <div className="submit-btn mt2">
                                <form action={handleForm}>
                                    <Submit />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </>
    )
}

export default SubmitJourney;