import React, { useContext, useEffect, useState } from "react";
import Transaction from "./Transaction";
import { NewEntry, AllTransactions } from "./Shared";
import { Global } from "../Context/Global";
import "../Styles/Home.css";

function Home() {

    const { transactions } = useContext(Global);
    const [recents, setRecents] = useState([]);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    
    useEffect(() => {
        setRecents(transactions.slice(0, 3));
        setIncome(transactions.filter(transaction => transaction.type === "Income").reduce((acc, transaction) => (acc += transaction.amount), 0));
        setExpenses(transactions.filter(transaction => transaction.type === "Expenses").reduce((acc, transaction) => (acc += transaction.amount), 0))
    }, [transactions])

    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const up = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--blue)"
        className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
    </svg>;

    const down = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--red)"
        className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
    </svg>;

    return <section className="home">
        <div className="balance flex v-center">
            <div className="flex flex-column">
                <h5>Current Balance</h5>
                <h1>$ {income - expenses}</h1>
            </div>
            <div className="spacer"></div>
            <span className="btn btn-right" onClick={NewEntry}>
                New
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
            </span>
        </div>

        <div className="summary flex v-center round">
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

        <div className="recents flex flex-column v-center">

            {!recents || recents.length <= 0 ? <p>No transaction yet</p> :
                <>
                    <div className="recent-title flex w-100 v-center">
                        <h5>Recent Transactions</h5>
                        <div className="spacer"></div>
                        <h5 className="pointer" onClick={AllTransactions}>See All</h5>
                    </div>
                    <div className="flex flex-column w-100">
                        {recents.map(transaction => (
                            <Transaction key={transaction._id} transaction={transaction} canRemove={false} />
                        ))}
                    </div>
                </>
            }

        </div>
    </section>;
}

export default Home;