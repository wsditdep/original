import { fetchSetting } from '@/app/actions/notice/data';
import { fetchAuthenticatedUser } from '@/app/actions/user/data';
import { auth } from '@/app/auth';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import Support from '@/components/support/Support';

export const dynamic = "force-dynamic"

const page = async () => {

    const { user: logedinUser } = await auth();
    const user = await fetchAuthenticatedUser();

    const setting = await fetchSetting() || {};

    return (
        <>
            <Support setting={JSON.parse(JSON.stringify(setting))} />
            <SecurityCheck
                user={JSON.parse(JSON.stringify(logedinUser))}
                authenticatedUser={JSON.parse(JSON.stringify(user))}
            />
        </>
    )
}

export default page