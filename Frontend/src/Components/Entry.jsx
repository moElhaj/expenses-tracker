import React, { useState, useContext, useRef } from "react";
import { BackHome } from "./Shared";
import { Global } from "../Context/Global";
import "../Styles/Entry.css";

function Entry() {

    const { addTransaction } = useContext(Global);

    const [validAmount, setValidAmount] = useState(false);
    const [validItem, setValidItem] = useState(false);
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [item, setItem] = useState('');
    const inputAmount = useRef(null);
    const inputItem = useRef(null);
    const entryForm = useRef(null);

    async function add(e) {
        e.preventDefault();
        if (validAmount && validItem && type) {
            addTransaction({ amount, type, item });
            BackHome();
        } else {
            entryForm.current.style.border = "3px solid var(--red)";
        }
    }

    function validateAmount(amount) {
        inputAmount.current.style.border = "3px solid var(--red)";
        if (/^\d+$/.test(amount)) {
            inputAmount.current.style.border = "3px solid var(--blue)";
            setAmount(amount);
            setValidAmount(true);
        }
    }

    function validateItem(item) {
        inputItem.current.style.border = "3px solid var(--red)";
        if (item.length <= 20) {
            inputItem.current.style.border = "3px solid var(--blue)";
            setItem(item);
            setValidItem(true);
        }
    }

    return <section className="entry">

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

        <form ref={entryForm} className="entry-form flex flex-column round" onSubmit={add}>

            <div className="form-group">
                <label className="radio">
                    <input type="radio" name="type" defaultChecked={type === 'Income'} value="Income" onClick={() => setType('Income')} />
                    <span className="radio-text">Income</span>
                    <span className="checkmark"></span>
                </label>
                <label className="radio">
                    <input type="radio" name="type" defaultChecked={type === 'Expenses'} value="Expenses" onClick={() => setType('Expenses')} />
                    <span className="radio-text">Expenses</span>
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input ref={inputAmount} className="text-input" type="text" id="amount" onChange={(e) => validateAmount(e.target.value)} />
                <span className="text-input-info">Only numbers allowed</span>
            </div>

            <div className="form-group">
                <label htmlFor="item">Item</label>
                <input ref={inputItem} className="text-input" type="text" id="item" max="20" onChange={(e) => validateItem(e.target.value)} />
                <span className="text-input-info">20 character max</span>
            </div>

            <div className="form-group">
                <div className="flex">
                    <div className="spacer"></div>
                    <span className="btn btn-right btn-dark" onClick={add}>
                        Add<svg xmlns=" http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                    </span>
                </div>
            </div>

        </form>

    </section>;
}

export default Entry;