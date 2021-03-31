import React, { useState } from "react";
import { BackHome } from "./Shared";
import "../styles/Entry.css";

function Entry() {

    const [message, setMessage] = useState("");

    async function add(e){
        e.preventDefault();
        setMessage("");
        let elements = [...e.target.elements];
        let amount = e.target.elements[0].value;
        let type;
        e.target.elements[1].checked === true ? type = 'Income' : type = 'Expense';
        let item = e.target.elements[3].value;
        let category = e.target.elements[4].value;

        fetch('/transactions', {
            method: "post",
            body: JSON.stringify({ amount, type, item, category }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
                .then(data => window.location.reload(false))
                .catch(error => setMessage("Something Wrong, try again"));
    }

    return <>
        <div className="entry">
            <span className="clickable" onClick={BackHome}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
            </span>

            <div className="new-entry">
                <form className="flex flex-column" onSubmit={add}>

                {message && <div className="form-group error-message">{message}</div>}

                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input className="text-input" type="number" id="amount" name="amount" required />
                    </div>

                    <div className="form-group">
                        <label className="radio">
                            <input type="radio" name="type" required />
                            <span className="radio-text">Income</span>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio">
                            <input type="radio" name="type" required />
                            <span className="radio-text">Expenses</span>
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="item">Item</label>
                        <input className="text-input" type="text" id="item" name="item" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input className="text-input" list="categories" id="category" name="category" required />

                        <datalist id="categories">
                            <option value="Grocery" />
                            <option value="Travel" />
                            <option value="Bills" />
                            <option value="Bank" />
                        </datalist>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn clickable">Add<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg></button>
                    </div>

                </form>

            </div>
        </div>
    </>;
}

export default Entry;