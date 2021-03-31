import React, {useState} from "react";
import "../styles/Transaction.css";
import gsap from "gsap";


function Transaction({data, canRemove}) {

	const[id, setId] = useState(null);
	const months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
	const up = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#52d138" className="bi bi-arrow-up" viewBox="0 0 16 16">
	  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
	</svg>; 

	const down = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ED295B" className="bi bi-arrow-down" viewBox="0 0 16 16">
	  <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
	</svg>

	async function remove(id) {
		const response = await fetch(`/transactions/${id}`, {
            method: "delete"
        });
        if (response.status === 200) {
            window.location.reload(false)
        } else {
            window.location.reload(false)
        }
    }


	return <div className="transaction flex v-center">

		<div className="transaction-date flex flex-column">
			<span className="bold">{data.day}</span>
			<span>{months[data.month - 1]}</span>
		</div>

		<div className="transaction-details flex flex-column">
			<span>{unescape(data.item)}</span>
			<h5>{unescape(data.category)}</h5>
		</div>

		<div className="transaction-amount flex">
		${data.amount}
		{data.type==="Income" ? up : down}
		</div>

		{canRemove && <div className="transaction-action">
			<span className="clickable" onClick={() => remove(data._id)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
				<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
			</svg>
			</span>
		</div>}

	</div>;
}

export default Transaction;