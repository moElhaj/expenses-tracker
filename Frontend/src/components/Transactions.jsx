import React from "react";
import { BackHome } from "./Shared";
import Transaction from "./Transaction";
import "../styles/Transactions.css";

function Transactions({transactions}) {

    return <>
        <div className="transactions">
            <div className="flex v-center"></div>
            <span className="clickable" onClick={BackHome}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </span>

            <div className="flex flex-column w-100 all-transactions">

                {!transactions || transactions.length <= 0 ? <p>No transaction yet</p> :
                    <>
                        <div className="flex flex-column w-100">
                            {transactions && transactions.map(transaction => (
                                <Transaction key={transaction._id} data={transaction} canRemove={true}/>
                            ))}
                        </div>
                    </>
                }

            </div>

        </div>
    </>;
}

export default Transactions;