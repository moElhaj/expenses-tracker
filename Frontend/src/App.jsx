import React, { useEffect, useContext } from "react";
import { useOrientation } from 'react-use';
import { Global } from "./Context/Global";
import gsap from "gsap";

// Componenets
import Home from "./Components/Home";
import Entry from "./Components/Entry";
import Transactions from "./Components/Transactions";
import { Error, Orientation } from "./Components/Shared";

import "./App.css";

function App() {

    const { error } = useContext(Global);
    const orientationState = useOrientation();

    useEffect(() => {
        gsap.to('.container', .5, { opacity: 1 });
    }, [orientationState])


    if (orientationState.angle === 0) {
        return <>
            {error ? <Error message={error} /> : <>
                <div className="container flex">
                    <Transactions />
                    <Entry />
                    <Home />
                </div>
            </>
            }
        </>;
    } else {
        return <Orientation />;
    }
}

export default App;
