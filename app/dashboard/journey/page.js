import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Image from 'next/image';
import { fetchAuthenticatedUser } from '@/app/actions/user/data';
import ValidateJourney from '@/components/journey/ValidateJourney';
import { auth } from '@/app/auth';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import Navbar from "@/components/navBar/Navbar"
import userlevel from "@/public/journey-page/user-level.png"
import icon6 from "@/public/home-page/icon6.png";
import welcome1 from "@/public/home-page/welcome1.png";
import welcome2 from "@/public/home-page/welcome2.png";
import welcome7 from "@/public/originaltravel_image/welcome7.png";
import welcome8 from "@/public/originaltravel_image/welcome8.png";
import welcome9 from "@/public/originaltravel_image/welcome9.png";
import welcome10 from "@/public/originaltravel_image/welcome10.png";
import welcome11 from "@/public/originaltravel_image/welcome11.png";
import welcome12 from "@/public/originaltravel_image/welcome12.png";




export const dynamic = "force-dynamic";

const page = async () => {

  const { user: logedinUser } = await auth();

  const user = await fetchAuthenticatedUser() || {};


  return (
    <>
      <Navbar />
      <Breadcrumb title="Explore Hotel" link="/dashboard" />
      <section className="journey-section">

        <div className='journey-main-wrapper'>
          <div className='journey-main-parent'>
            <div className='journey-main-child'>

              <div className='journey-main-sub-child'>
                <div className='journey-level-tap-parent'>
                  <div className='journey-level-tap-child'>
                    <div className='level-img'>
                      <Image
                        src={userlevel}
                        alt='icon'
                        height={100}
                        width={100}
                        unoptimized
                      />
                    </div>
                    <div className='level-text'>
                      <h3>Current Level</h3>
                    </div>
                  </div>
                  <div className='journey-level-tap-child'>
                    <div className='level'>
                      <h2>Gold</h2>
                    </div>
                  </div>
                </div>
              </div>


              <div className='journey-main-sub-child'>
                <div className='journey-account-tap-parent'>
                  <div className='joureny-account-tap-child'>
                    <div className='order'>
                      <p>Order Amount</p>
                      <h1>{user?.today_order ?? ""}/{user?.daily_available_order ?? ""}</h1>
                    </div>
                  </div>
                  <div className='joureny-account-tap-child'>
                    <div className='balances'>
                      <p>Today Profit</p>
                      <h1>$ {user?.today_commission?.toFixed(2) ?? ""}</h1>
                    </div>
                    <div className='balances'>
                      <p>Total Profit</p>
                      <h1>$ 1,000.00</h1>
                    </div>
                    <div className='balances'>
                      <p>Account Balance</p>
                      <h1>$ {user?.balance?.toFixed(2) ?? ""}</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className='journey-main-sub-child'>
                <div className='journey-btn-parent'>
                  <div className='journey-btn-child'>
                    <div className="submit-btn">
                      <ValidateJourney />
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='journey-main-child'>
              <div className='journey-next-main-parent'>

                <div className="scroll-container">
                  <Image
                    src={welcome1}
                    alt="logo"
                    height={100}
                    width={100}
                    unoptimized
                  />
                  <Image
                    src={welcome2}
                    alt="logo"
                    height={100}
                    width={100}
                    unoptimized
                  />

                </div>
                <div className="holiday-parent">
                  <div className="holiday-image-parent">
                    <div className="holiday-image-child">
                      <Image
                        src={welcome7}
                        alt="image"
                        width={100}
                        height={100}
                        unoptimized
                      />
                      <h2>Family Holiday</h2>
                    </div>
                    <div className="holiday-image-child">
                      <Image
                        src={welcome8}
                        alt="image"
                        height={100}
                        width={100}
                        unoptimized
                      />
                      <h2>Honey Moon</h2>
                    </div>
                  </div>
                  <div className="holiday-image-parent">
                    <div className="holiday-image-child">
                      <Image
                        src={welcome9}
                        alt="image"
                        width={100}
                        height={100}
                        unoptimized
                      />
                      <h2>Luxury Holiday</h2>
                    </div>
                    <div className="holiday-image-child">
                      <Image
                        src={welcome10}
                        alt="image"
                        height={100}
                        width={100}
                        unoptimized
                      />
                      <h2>Couple Holiday</h2>
                    </div>
                  </div>
                  <div className="holiday-image-parent">
                    <div className="holiday-image-child">
                      <Image
                        src={welcome11}
                        alt="image"
                        width={100}
                        height={100}
                        unoptimized
                      />
                      <h2>Summer Holiday</h2>
                    </div>
                    <div className="holiday-image-child">
                      <Image
                        src={welcome12}
                        alt="image"
                        height={100}
                        width={100}
                        unoptimized
                      />
                      <h2>Responsible Holiday</h2>
                    </div>
                  </div>
                </div>

                <div className='journey-next-main-child'>
                  <div className="welcome-footer-container">
                    <div className="welcome-footer">
                      <p>Copyright © 2024 Ausventure . All Rights Reserved.</p>
                      <div className="help-center-icon">
                        <Image
                          src={icon6}
                          alt="icon"
                          height={100}
                          width={100}
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
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