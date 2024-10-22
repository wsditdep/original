import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Navbar from "@/components/navBar/Navbar"
import Transactions from "@/components/transactions/Transaction"
import { fetchRechargeHistory } from "@/app/actions/history/data";
import { fetchWithdrawal } from "@/app/actions/user/data"

export const dynamic = "force-dynamic"

const page = async () => {

    const recharge = await fetchRechargeHistory() || [];
    const withdrawal = await fetchWithdrawal() || [];

    return (
        <>
            <Navbar />
            <Breadcrumb title="Transactions" link="/dashboard" />
            <section className="transactions-section">
                <Transactions
                    history={JSON.parse(JSON.stringify(recharge))}
                    withdrawal={JSON.parse(JSON.stringify(withdrawal))}
                />
            </section>
        </>
    )
}

export default page