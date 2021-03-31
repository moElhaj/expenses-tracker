import React, { createContext, useState, useEffect } from "react";
import { Loader } from "./components/Shared";

export const Global = createContext();

export default ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [transactions, setTransactions] = useState(null);
    const [income, setIncome] = useState(null);
    const [expenses, setEexpenses] = useState(null);

    useEffect(() => {
        const getContext = async () => {
            const response = await fetch('/transactions');
            if (response.status === 200) {
                const data = await response.json();
                setTransactions(data.reverse());

                let _expenses = 0;
                let _income = 0; 
                data.forEach(transaction => {
                    if(transaction.type === "Expense") {
                        _expenses += transaction.amount;
                    } else if(transaction.type === "Income") {
                        _income += transaction.amount;
                    }
                    
                })
                setEexpenses(_expenses);
                setIncome(_income);
                setLoading(false);
            } else {
                setError(true)
                setLoading(false);
            }           
        }
        getContext();
    }, []);

    return <>
        {loading ? <Loader /> :
            <Global.Provider value={{ error, setError, transactions, setTransactions, expenses, income }}>
                {children}
            </Global.Provider>
        }
    </>;
}