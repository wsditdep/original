"use client";

import Image from "next/image";
import vip1 from "@/public/vip/vip1.svg";
import vip2 from "@/public/vip/vip2.svg";
import vip3 from "@/public/vip/vip3.svg";
import vip4 from "@/public/vip/vip4.svg";
import feature1 from "@/public/landing_features/feature1.png";
import feature2 from "@/public/landing_features/feature2.png";
import feature3 from "@/public/landing_features/feature3.png";
import feature4 from "@/public/landing_features/feature4.png";
import feature5 from "@/public/landing_features/feature5.png";
import feature6 from "@/public/landing_features/feature6.png";
import feature7 from "@/public/landing_features/feature7.png";

import partner1 from "@/public/partners/partner1.png";
import partner2 from "@/public/partners/partner2.png";
import partner3 from "@/public/partners/partner3.png";
import partner4 from "@/public/partners/partner4.png";
import partner5 from "@/public/partners/partner5.png";
import partner6 from "@/public/partners/partner6.png";
import { useState } from "react";

const Tab = ({ allCommission, userCommission }) => {

    const [activeTab, setActiveTab] = useState(true);
    const vipImages = [vip1, vip2, vip3, vip4];

    return (
        <>
            <div className="landing-page-tab">
                <div onClick={() => setActiveTab(!activeTab)} className={activeTab ? "landing-page-tab-childs landing-tab-active" : "landing-page-tab-childs"}>
                    <h3>Tier Level</h3>
                </div>
                <div onClick={() => setActiveTab(!activeTab)} className={activeTab ? "landing-page-tab-childs" : "landing-page-tab-childs landing-tab-active"}>
                    <h3>Partners</h3>
                </div>
            </div>
            {
                activeTab
                    ?
                    <div className="vip-wrapper">
                        <div className="vip-wrapper-parent">
                            {
                                allCommission?.map((data, index) => (
                                    <div className={userCommission === data?.membership_name ? "vip-childs memberActive" : "vip-childs"} key={index}>
                                        <Image
                                            src={vipImages[index % vipImages.length]}
                                            alt="vip"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <h3>VIP {index + 1}</h3>
                                        <h4>{data?.membership_name}</h4>
                                        <p>{(data?.commission_rate) * 100}%</p>
                                        {userCommission === data?.membership_name ? <></> : <i className="fa fa-lock"></i>}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <div className="partners-wrapper">
                        <div className="partners-parent">
                            <div className="partners-childs">
                                <Image
                                    src={partner1}
                                    alt="partner1"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partners-childs">
                                <Image
                                    src={partner2}
                                    alt="partner1"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partners-childs">
                                <Image
                                    src={partner3}
                                    alt="partner1"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className="partners-parent">
                            <div className="partners-childs">
                                <Image
                                    src={partner4}
                                    alt="partner1"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partners-childs">
                                <Image
                                    src={partner5}
                                    alt="partner1"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className="partners-childs">
                                <Image
                                    src={partner6}
                                    alt="partner1"
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
            }
            <div className="landing-feature-images">
                <div className="landing-feature-images-parent">
                    <div className="landing-feature-images-childs">
                        <Image
                            src={feature1}
                            alt="vip"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="landing-feature-images-childs">
                        <h3>Secret Danube</h3>
                        <p>Covering 1,780 miles from its Black Forest source to the Blue Danube course and the Black Sea delta, this revered river never fails to live up to its …</p>
                    </div>
                </div>
                <div className="landing-feature-images-parent">
                    <div className="landing-feature-images-childs">
                        <Image
                            src={feature2}
                            alt="vip"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="landing-feature-images-childs">
                        <h3>Cyprus</h3>
                        <p>“A golden green leaf thrown into the sea”, is how Cypriot poet Leonidas Malenis described this beautiful island, but the leaf was thrown to a …</p>
                    </div>
                </div>
                <div className="landing-feature-images-parent">
                    <div className="landing-feature-images-childs">
                        <Image
                            src={feature3}
                            alt="vip"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="landing-feature-images-childs">
                        <h3>Provence, France</h3>
                        <p>Small vessels are a big advantage on the slow-motion waterways of southern France, and our barge for this tour is a beautiful blend of comfort …</p>
                    </div>
                </div>
                <div className="landing-feature-images-parent">
                    <div className="landing-feature-images-childs">
                        <Image
                            src={feature4}
                            alt="vip"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="landing-feature-images-childs">
                        <h3>Armenia</h3>
                        <p>Set side by side in the southern Transcaucasia region, the pairing of Georgia and Armenia makes a delightful double-bill of discovery. While each has…</p>
                    </div>
                </div>
                <div className="landing-feature-images-parent">
                    <div className="landing-feature-images-childs">
                        <Image
                            src={feature5}
                            alt="vip"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="landing-feature-images-childs">
                        <h3>Austria</h3>
                        <p>Nestled amid rolling hills, with the Mieminger Mountains as a backdrop, Obsteig’s winter persona is a popular cross-country ski resort. With its …</p>
                    </div>
                </div>
                <div className="landing-feature-images-parent">
                    <div className="landing-feature-images-childs">
                        <Image
                            src={feature6}
                            alt="vip"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="landing-feature-images-childs">
                        <h3>Crete, Greece</h3>
                        <p>As the largest island in Greece, Crete has much to offer ramblers, from its shores fringed with ribbons of soft sand and coastal paths overlooking the …</p>
                    </div>
                </div>
                <div className="landing-feature-images-parent">
                    <div className="landing-feature-images-childs">
                        <Image
                            src={feature7}
                            alt="vip"
                            height={100}
                            width={100}
                            unoptimized
                        />
                    </div>
                    <div className="landing-feature-images-childs">
                        <h3>The Dolomite, Italy</h3>
                        <p>The Dolomites is a land of frosted peaks that rise from lush meadows and forests scattered with sparkling lakes. While snow-sport enthusiasts are…</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tab;