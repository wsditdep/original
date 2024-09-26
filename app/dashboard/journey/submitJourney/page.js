import { fetchAuthenticatedUser } from '@/app/actions/user/data';
import { auth } from '@/app/auth';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import SubmitJourney from '@/components/submitJourney/SubmitJourney';
import Navbar from "@/components/navBar/Navbar";


export const dynamic = "force-dynamic"

const page = async () => {

    const { user: logedinUser } = await auth();
    const user = await fetchAuthenticatedUser() || {};

    return (
        <>
            {/* <Navbar/> */}
            {/* <Breadcrumb title="Explore Hotels" link="/dashboard/journey" /> */}
            <SubmitJourney />
            <SecurityCheck
                user={JSON.parse(JSON.stringify(logedinUser))}
                authenticatedUser={JSON.parse(JSON.stringify(user))}
            />
        </>
    )
}

export default page