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
import Popup from "reactjs-popup";

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




    const reviews = [
        { id: 1, data: "The movie is filled with amazing actors who truly,make the film." },
        { id: 2, data: "The actors give a legendary performance in this film is absolutely hilarious." },
        { id: 3, data: "The film fully demonstrates the changing personalities of each character. It makes me feel empathetic." },
        { id: 4, data: "This movie was beyond amazing." },
        { id: 5, data: "That was the icing on the cake in this movie for me :)" },
        { id: 6, data: "This film fulfilled my imagination of the character" },
        { id: 7, data: "Really recommended you guys to watch it sia~" },
        { id: 8, data: "There's nothing more to say, in one word: EXCELLENT!!!" },
        { id: 9, data: "HOU SAI LEI!!!!" },
        { id: 10, data: "This is the only best hotel I have ever recommended in my life." }
    ];


    const [isCommand, setIsCommand] = useState("Comment Good Review");


    const manage_review = (commandValue) => {
        setIsCommand(commandValue)
    }


    const [rating, setRating] = useState(0);


    const handleClick = (index) => {
        setRating(index + 1);

        console.log(index)
    };


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
                                {Array.from({ length: 5 }, (v, i) => (
                                    <li key={i} onClick={() => handleClick(i)}>
                                        <i className={`fa fa-star ${i < rating ? 'rated' : ''}`}></i>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                            <Popup trigger={
                                <div className="journey-review-tap-parent">
                                    <div className="journey-review-tap-child">
                                        <p>{isCommand}</p>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                </div>
                            } position="right center" modal nested>
                                {close => (
                                    <div className="modal model-side">
                                        <div className='nav-bar nav-bar-side'>
                                            <h1></h1>
                                            <div onClick={close} className="close-btn">
                                                <i className="fa-solid fa-xmark"></i>
                                            </div>
                                        </div>
                                        <div className='nav-bar nav-bar-side1'>
                                            <h1>Good Review</h1>
                                        </div>
                                        <div className="content content-side">
                                            <div className="review-wrapper">
                                                <div className="review-parent">
                                                    {reviews.map((review) => (
                                                        <div key={review.id} className="review-child" onClick={() => { manage_review(review.data); close(); }}>
                                                            <p>{review.data}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>


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