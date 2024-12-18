import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import Navbar from "@/components/navBar/Navbar";
import bgimg from "@/public/home-page/bgimg.png";
import headphone from "@/public/home-page/icon6.png";
import logo from "@/public/originaltravel_image/OriginalTravel-Logo-03.png";
import Link from 'next/link';





const Support = ({ support }) => {


    return (
        <>
           
            <section>
                <div className="main-support">
                    <div className="bg-img">
                        <Image
                            src={bgimg}
                            alt="bg img"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="home-main-container">
                      
                                <Breadcrumb title="Contact Us" link="/dashboard" />
                                <div className="logo-center">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                     <Image
                                     className='support-img'
                                        src={headphone}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                    <h1>Contact Us via Telegram</h1>
                                    <p>Operation Hours: 10:00AM - 10:00PM</p>
                                    <p>(Mon - Sun)</p>
                                    <Link target="_blank" href={support?.link ?? ""}>
                                    <div className='support-button'>
                                        <button>Redirect to Telegram</button>
                                    </div>
                                    </Link>
                                </div>
                                <div className="support-footer-container">
                            {/* <div className="support-footer">
                                <p>Copyright © 2024 Original Travel . All Rights Reserved</p>
                            </div> */}
                        </div>
                            </div>
                      
                    </div>
                
            </section>



        </>
    )
}

export default Support