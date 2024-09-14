import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import support from "@/public/support.png";

const Support = ({ setting }) => {
    return (
        <>
            <Breadcrumb title="Agent" link="/dashboard" />
            <section className="support-section">
                <div className="support-info">
                    <h3>Service</h3>
                    <p>Contact us if you have any problem.</p>
                    <div className="support-image-wrappers">
                        <Image
                            src={support}
                            height={100}
                            width={100}
                            alt="icon"
                            unoptimized
                        />
                    </div>
                </div>
                <div className="support-more-info">
                    <div className="support-info-more">
                        <i className="fa fa-arrow-right"></i>
                    </div>
                    <div className="support-info-more">
                        <h3>Contact Us with Whatsapp</h3>
                        <p>Agency service Operation time: {setting?.order_time_start}-{setting?.order_time_end}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Support