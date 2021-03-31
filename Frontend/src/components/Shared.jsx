import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/Shared.css";

export const BackHome = () => {
    let tl = gsap.timeline();
    tl.to('.home', 0, { x: -400 })
        .to('.transactions', .5, { x: 400 })
        .to('.entry', .5, { x: 400 }, "-=.5")
        .to('.home', .5, { x: 0 }, "-=.5")
}

export const NewEntry = () => {
    let tl = gsap.timeline();
    tl.to('.home', .5, { x: -400 })
        .to('.transactions', 0, { x: 400 }, "-=.5")
        .to('.entry', 0, { x: 400 }, "-=.5")
        .to('.entry', .5, { x: 0 }, "-=.5")
}

export const AllTransactions = () => {
    let tl = gsap.timeline();
    tl.to('.home', .5, { x: -400 })
        .to('.transactions', 0, { x: 400 }, "-=.5")
        .to('.entry', 0, { x: 400 }, "-=.5")
        .to('.transactions', .5, { x: 0 }, "-=.5")
}

export const Error = () => {
    return <section className="loader error flex flex-column center">
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-wifi-off" viewBox="0 0 16 16">
            <path d="M10.706 3.294A12.546 12.546 0 0 0 8 3 12.44 12.44 0 0 0 .663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c.63 0 1.249.05 1.852.148l.854-.854zM8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065 8.448 8.448 0 0 1 3.51-1.27L8 6zm2.596 1.404l.785-.785c.63.24 1.228.545 1.785.907a.482.482 0 0 1 .063.745.525.525 0 0 1-.652.065 8.462 8.462 0 0 0-1.98-.932zM8 10l.934-.933a6.454 6.454 0 0 1 2.012.637c.285.145.326.524.1.75l-.015.015a.532.532 0 0 1-.611.09A5.478 5.478 0 0 0 8 10zm4.905-4.905l.747-.747c.59.3 1.153.645 1.685 1.03a.485.485 0 0 1 .048.737.518.518 0 0 1-.668.05 11.496 11.496 0 0 0-1.812-1.07zM9.02 11.78c.238.14.236.464.04.66l-.706.706a.5.5 0 0 1-.708 0l-.707-.707c-.195-.195-.197-.518.04-.66A1.99 1.99 0 0 1 8 11.5c.373 0 .722.102 1.02.28zm4.355-9.905a.53.53 0 1 1 .75.75l-10.75 10.75a.53.53 0 0 1-.75-.75l10.75-10.75z" />
        </svg>
        <h1>Connection Error</h1>
    </section>
}

export const Loader = () => {
    return <section className="loader flex flex-column center">
        <svg width="64" height="64" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#EEEEEE">
            <g fill="none" fillRule="evenodd" strokeWidth="2">
                <circle cx="22" cy="22" r="1">
                    <animate attributeName="r"
                        begin="0s" dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity"
                        begin="0s" dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite" />
                </circle>
                <circle cx="22" cy="22" r="1">
                    <animate attributeName="r"
                        begin="-0.9s" dur="1.8s"
                        values="1; 20"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.165, 0.84, 0.44, 1"
                        repeatCount="indefinite" />
                    <animate attributeName="stroke-opacity"
                        begin="-0.9s" dur="1.8s"
                        values="1; 0"
                        calcMode="spline"
                        keyTimes="0; 1"
                        keySplines="0.3, 0.61, 0.355, 1"
                        repeatCount="indefinite" />
                </circle>
            </g>
        </svg>
    </section>
}

export const Orientation = () => {
    useEffect(() => {
        Rotate('.bi-phone');
    }, []);
    return <section className="orientation flex flex-column center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
        <p>Please rotate your device back</p>
    </section>;
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
