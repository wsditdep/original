import Link from "next/link";

const Breadcrumb = ({ link, title, activeWithdrawalHistory, activeRechargeHistory }) => {
    return (
        <div className="breadcrumb-wrapper" >
            <div className="breadcrumb-wrapper-childs">
                <Link href={link}>
                    <i className="fa fa-angle-left"></i>
                </Link>
            </div>
            <div className="breadcrumb-wrapper-childs">
                <h3>{title}</h3>
            </div>
            {/* <div className="breadcrumb-wrapper-childs">
                {
                    activeWithdrawalHistory && activeWithdrawalHistory
                        ?
                        <Link href="/dashboard/withdrawalHistory">
                            <i className="fa fa-history"></i>
                        </Link>
                        :
                        activeRechargeHistory && activeRechargeHistory
                            ?
                            <Link href="/dashboard/rechargeHistory">
                                <i className="fa fa-history"></i>
                            </Link>
                            :
                            <></>
                }
            </div> */}
        </div>
    )
}

export default Breadcrumb