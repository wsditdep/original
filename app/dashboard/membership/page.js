import Image from "next/image"

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import membership from "@/public/sidebar/member.jpg";
import Navbar from "@/components/navBar/Navbar";
export const dynamic = "force-dynamic"

const page = async () => {

    return (
        <>
        <Navbar/>
            <Breadcrumb title={"Membership Upgrade"} link="/dashboard" />
            <div className="membership-section">
                <div className="membership-wrapper">
                    <div className="membership-img">
                        <Image
                            src={membership}
                            alt="icon"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page