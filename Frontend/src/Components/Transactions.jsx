import React, { useContext } from "react";
import { BackHome } from "./Shared";
import Transaction from "./Transaction";
import { Global } from "../Context/Global";
import "../Styles/Transactions.css";

function Transactions() {

    const { transactions } = useContext(Global);

    return <>
        <section className="transactions">

            <div className="flex">
                <span className="btn btn-left" onClick={BackHome}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                    </svg>
                    Back
                </span>
                <div className="spacer"></div>
            </div>

            <div className="flex flex-column w-100 all-transactions">

                {!transactions || transactions.length <= 0 ? <p className="round">No transaction yet</p> :
                    <>
                        <div className="flex flex-column w-100">
                            {transactions.map(transaction => (
                                <Transaction key={transaction._id} transaction={transaction} canRemove={true} />
                            ))}
                        </div>
                    </>
                }

            </div>

        </section>
    </>;
}

export default Transactions;