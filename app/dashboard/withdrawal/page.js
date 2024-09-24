import { fetchPendingWithdrawal, fetchAuthenticatedUser } from '@/app/actions/user/data';
import { auth } from '@/app/auth';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import Withdrawal from '@/components/withdrawal/Withdrawal';
import Navbar from "@/components/navBar/Navbar";


export const dynamic = "force-dynamic"

const page = async () => {

  const { user: logedinUser } = await auth();

  const user = await fetchAuthenticatedUser() || {};
  const withdrawalInfo = await fetchPendingWithdrawal() || {};

  return (
    <>
    <Navbar/>
      <Withdrawal
        withdrawalInfo={JSON.parse(JSON.stringify(withdrawalInfo))}
        user={JSON.parse(JSON.stringify(user))}
      />
      <SecurityCheck
        user={JSON.parse(JSON.stringify(logedinUser))}
        authenticatedUser={JSON.parse(JSON.stringify(user))}
      />
    </>
  )
}

export default page