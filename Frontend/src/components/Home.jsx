import React from "react";
import Transaction from "./Transaction";
import { NewEntry, AllTransactions } from "./Shared";
import "../styles/Home.css";

function Home({ transactions, expenses, income }) {

    const recents = [];
    for (var i = 0; i <= 2; i++) {
        if(transactions[i]) {
            recents.push(transactions[i])
        }
    }
    const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const up = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#52d138" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
    </svg>;

    const down = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ED295B" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
    </svg>;

    return <>
        <div className="home">
            <div className="balance flex v-center">
                <div className="flex flex-column">
                    <span>Total Balance</span>
                    <h1>$ {income}</h1>
                </div>
                <div className="spacer"></div>
                <div>
                    <span className="clickable btn" onClick={NewEntry}>
                        New
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="summary flex v-center">
                <div className="income">
                    <h5>Income</h5>
                    <h3>$ {income}{up}</h3>
                </div>
                <div className="spacer"></div>
                <div className="spendings">
                    <h5>Expenses</h5>
                    <h3>$ {expenses}{down}</h3>
                </div>
            </div>
            <div className="recent flex flex-column v-center">

                {!recents || recents.length <= 0 ? <p>No transaction yet</p> :
                    <>
                        <div className="recent-title flex w-100 v-center">
                            <h3>Recent Transactions</h3>
                            <div className="spacer"></div>
                            <span className="clickable" onClick={AllTransactions}>See All</span>
                        </div>
                        <div className="flex flex-column w-100">
                            {recents && recents.map(transaction => (
                                <Transaction key={transaction._id} data={transaction} canRemove={false} />
                            ))}
                        </div>
                    </>
                }

            </div>
        </div>
    </>;
}

export default Home;