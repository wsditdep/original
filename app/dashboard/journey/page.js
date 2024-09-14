import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Image from 'next/image';
import { fetchAuthenticatedUser } from '@/app/actions/user/data';
import ValidateJourney from '@/components/journey/ValidateJourney';
import globe from "@/public/globe.svg";

import expolore1 from "@/public/explore_hotels/img1.png";
import expolore2 from "@/public/explore_hotels/img2.png";
import expolore3 from "@/public/explore_hotels/img3.png";
import expolore4 from "@/public/explore_hotels/img4.png";
import expolore5 from "@/public/explore_hotels/img5.png";
import expolore6 from "@/public/explore_hotels/img6.png";
import { auth } from '@/app/auth';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import CirclerProgress from '@/components/circlerProgress/CirclerProgress';

export const dynamic = "force-dynamic";

const page = async () => {

  const { user: logedinUser } = await auth();

  const user = await fetchAuthenticatedUser() || {};

  return (
    <>
      <Breadcrumb title="Start" link="/dashboard" />
      <section className="journey-section">
        <div className="journey-heading-wrapper"
          style={{
            backgroundImage: `url(${globe.src})`,
            width: '100%',
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'top -4rem right -4rem',
          }}
        >


          <div className="journey-heading-parent">
            <div className="journey-heading-childs">
              <div className='circler-container'>
                <CirclerProgress user={JSON.parse(JSON.stringify(user))}/>
              </div>
            </div>
            <div className="journey-heading-childs">
              <div className="journey-heeading-sub-childs">
                <div className="journey-heading-baby">
                  <p>Account Balance</p>
                  <h3>$ {user?.balance?.toFixed(2) ?? ""}</h3>
                </div>
                <div className="journey-heading-baby">
                  <p>Tour Uploaded</p>
                  <h3>{user?.daily_available_order ?? ""}</h3>
                </div>
              </div>
              <div className="journey-heeading-sub-childs">
                <div className="journey-heading-baby">
                  <p>Commissions</p>
                  <h3>$ {user?.today_commission?.toFixed(2) ?? ""}</h3>
                </div>
                <div className="journey-heading-baby">
                  <p>Tour Submitted</p>
                  <h3>{user?.today_order ?? ""}</h3>
                </div>
              </div>
            </div>
          </div>



        </div>
        <div className="explore-hotels">
          <div className="explore-hotels-heading">
            <h2>Trending Destinations</h2>
          </div>
          <div className="explore_hotel">
            <div className="explore-hotels-parent">
              <div className="explore-hotels-childs">
                <div className="explore-hotel-heading">
                  <Image
                    src={expolore1}
                    alt="places"
                    height={100}
                    width={100}
                    unoptimized
                  />
                  {/* <p>USDT 243.00</p> */}
                </div>
                <div className="explore-hotel-details">
                  <h3>New International Guest House</h3>
                </div>
              </div>
              <div className="explore-hotels-childs">
                <div className="explore-hotel-heading">
                  <Image
                    src={expolore2}
                    alt="places"
                    height={100}
                    width={100}
                    unoptimized
                  />
                  {/* <p>USDT 243.00</p> */}
                </div>
                <div className="explore-hotel-details">
                  <h3>Regent Hong Kong</h3>
                </div>
              </div>
            </div>
            <div className="explore-hotels-parent">
              <div className="explore-hotels-childs">
                <div className="explore-hotel-heading">
                  <Image
                    src={expolore3}
                    alt="places"
                    height={100}
                    width={100}
                    unoptimized
                  />
                  {/* <p>USDT 243.00</p> */}
                </div>
                <div className="explore-hotel-details">
                  <h3>Conrad Hong Kong</h3>
                </div>
              </div>
              <div className="explore-hotels-childs">
                <div className="explore-hotel-heading">
                  <Image
                    src={expolore4}
                    alt="places"
                    height={100}
                    width={100}
                    unoptimized
                  />
                  {/* <p>USDT 243.00</p> */}
                </div>
                <div className="explore-hotel-details">
                  <h3>Lanson Place Causeway Bay</h3>
                </div>
              </div>
            </div>
            <div className="explore-hotels-parent">
              <div className="explore-hotels-childs">
                <div className="explore-hotel-heading">
                  <Image
                    src={expolore5}
                    alt="places"
                    height={100}
                    width={100}
                    unoptimized
                  />
                  {/* <p>USDT 243.00</p> */}
                </div>
                <div className="explore-hotel-details">
                  <h3>New World Millennium Hotel</h3>
                </div>
              </div>
              <div className="explore-hotels-childs">
                <div className="explore-hotel-heading">
                  <Image
                    src={expolore6}
                    alt="places"
                    height={100}
                    width={100}
                    unoptimized
                  />
                  {/* <p>USDT 243.00</p> */}
                </div>
                <div className="explore-hotel-details">
                  <h3>Grand Hyatt</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="submit-btn mt2">
          <ValidateJourney />
        </div>
      </section >
      <SecurityCheck
        user={JSON.parse(JSON.stringify(logedinUser))}
        authenticatedUser={JSON.parse(JSON.stringify(user))}
      />
    </>
  )
}

export default page;