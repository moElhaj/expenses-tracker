import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from './AppReducer';
import { Loader } from "../Components/Shared";

const initialState = {
    transactions: [],
    error: null,
    loading: true
}

export const Global = createContext();

export default ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Actions
    async function getTransactions() {
        try {
            const response = await fetch('/transactions');
            const data = await response.json();
            dispatch({
                type: 'GET',
                payload: data.reverse()
            })
        } catch (err) {
            dispatch({
                type: 'Error',
                payload: "Problem retrieving data from server"
            })
        }
    }

    async function deleteTransaction(id) {
        try {
            await fetch(`/transactions/${id}`, {
                method: "delete"
            });
            dispatch({
                type: 'DELETE',
                payload: id
            })
        } catch (err) {
            dispatch({
                type: 'Error',
                payload: "An error occurred during the operation"
            })
        }
    }

    async function addTransaction(transaction) {
        try {
            const response = await fetch('/transactions/', {
                method: "post",
                body: JSON.stringify(transaction),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            dispatch({
                type: 'ADD',
                payload: data
            })
        } catch (err) {
            dispatch({
                type: 'Error',
                payload: "An error occurred during the operation"
            })
        }
    }

    return <>
        {state.loading ? <Loader /> :
            <Global.Provider value={{
                transactions: state.transactions,
                error: state.error,
                deleteTransaction,
                addTransaction,
                getTransactions
            }}>
                {children}
            </Global.Provider>
        }
    </>;
}