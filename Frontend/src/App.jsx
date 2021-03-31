import React, { useContext } from "react";
import { useOrientation } from 'react-use';
import { Global } from "./Global";

// Componenets
import Home from "./components/Home";
import Entry from "./components/Entry";
import Transactions from "./components/Transactions";
import { Error, Orientation } from "./components/Shared";

import "./App.css";

function App() {

    const { error, transactions, expenses, income } = useContext(Global);

    const orientationState = useOrientation();

    if (orientationState.angle === 0) {
        return <>
            {error ? <Error /> : <>
                <div className="container flex">
                    <Transactions transactions={transactions} />
                    <Entry />
                    <Home transactions={transactions} expenses={expenses} income={income} />
                </div>
            </>
            }
        </>;
    } else {
        return <Orientation />;
    }
}

export default App;
