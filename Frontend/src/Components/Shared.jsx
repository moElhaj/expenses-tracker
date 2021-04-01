import React, { useEffect } from "react";
import gsap from "gsap";
import "../Styles/Shared.css";

export const BackHome = () => {
    let tl = gsap.timeline();
    tl.to('.home', 0, { x: -400 })
        .to('.transactions', .5, { x: 400, display: "none" })
        .to('.entry', .5, { x: 400, display: "none" }, "-=.5")
        .to('.home', .5, { x: 0, display: "flex" }, "-=.5")
}

export const NewEntry = () => {
    let tl = gsap.timeline();
    tl.to('.home', .5, { x: -400 })
        .to('.transactions', 0, { x: 400, display: "none" }, "-=.5")
        .to('.entry', 0, { x: 400, display: "none" }, "-=.5")
        .to('.entry', .5, { x: 0, display: "flex" }, "-=.5")
}

export const AllTransactions = () => {
    let tl = gsap.timeline();
    tl.to('.home', .5, { x: -400 })
        .to('.transactions', 0, { x: 400, display: "none" }, "-=.5")
        .to('.entry', 0, { x: 400, display: "none" }, "-=.5")
        .to('.transactions', .5, { x: 0, display: "flex" }, "-=.5")
}

export const Error = () => {
    return <div className="container">
        <section className="error flex flex-column center">
            <h1>Oops!</h1>
            <p>Somthing Wrong</p>
            <span className="btn btn-right" onClick={() => window.location.reload(false)}>
                Reload
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                </svg>
            </span>
        </section>
    </div>;
}

export const Loader = () => {
    return <div className="container">
        <section className="loader flex center">
            <svg width="64" height="64" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="var(--black)">
                <g fill="none" fillRule="evenodd" strokeWidth="2">
                    <circle cx="22" cy="22" r="1">
                        <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline"
                            keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline"
                            keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
                    </circle>
                    <circle cx="22" cy="22" r="1">
                        <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline"
                            keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline"
                            keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite" />
                    </circle>
                </g>
            </svg>
        </section>
    </div>;
}

export const Orientation = () => {
    useEffect(() => {
        Rotate('.bi-phone');
    }, []);
    return <div className="container">
        <section className="orientation flex flex-column center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="var(--black)" className="bi bi-phone" viewBox="0 0 16 16">
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <p>Please rotate your device back</p>
        </section>
    </div>;
}

const Rotate = (element) => {
    let tl = gsap.timeline({ repeat: -1, ease: 'Power2.easeInOut' });
    tl.to(element, 1, {
        rotation: 90,
    })
    tl.to(element, 1, {
        rotation: 0
    })
    tl.to(element, 2, {
        rotation: 0
    })
    tl.to(element, 1, {
        rotation: 90,
    })
    tl.to(element, 1, {
        rotation: 0
    })
    tl.to(element, 2, {
        rotation: 0
    })
}
