import React, { useContext } from "react";
import "../Styles/Transaction.css";
import { Global } from "../Context/Global";
import gsap from "gsap";


function Transaction({ transaction, canRemove }) {

	const { deleteTransaction } = useContext(Global);

	const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

	function openConfirmDelete(id) {
		gsap.to(`.dt-${id}`, .3, { display: "flex", width: "100%" });
		gsap.to(`.dtc-${id}`, .3, { y: 0, delay: .3 });
	}

	function closeConfirmDelete(id) {
		gsap.to(`.dtc-${id}`, .3, { y: "300px" });
		gsap.to(`.dt-${id}`, .3, { display: "none", width: "0%", delay: .3 });
	}

	return <div className="transaction flex v-center round">

		<div className={`dt-${transaction._id} delete-transaction flex center`}>
			<div className={`dtc-${transaction._id} delete-transaction-content flex v-center`}>
				<span className="pointer" onClick={() => { closeConfirmDelete(transaction._id); deleteTransaction(transaction._id) }}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
						<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
					</svg>
				</span>
				<span>Are you sure</span>
				<span className="pointer" onClick={() => closeConfirmDelete(transaction._id)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
						<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
					</svg>
				</span>
			</div>
		</div>

		<div className="transaction-date flex flex-column">
			<h5>{transaction.day}</h5>
			<h5>{months[transaction.month - 1]}</h5>
		</div>
		<h5 className="transaction-item">{unescape(transaction.item)}</h5>
		<span className="transaction-sign">{transaction.type === "Income" ? <span style={{ color: "var(--blue)" }}>+</span> : <span style={{ color: "var(--red)" }}>-</span>}</span>
		<h5 style={{textAlign:"right"}}>$ {transaction.amount}</h5>
		{canRemove && <span className="pointer transaction-action" onClick={() => openConfirmDelete(transaction._id)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="var(--red)"
				className="bi bi-trash-fill" viewBox="0 0 16 16">
				<path
					d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
			</svg>
		</span>}
	</div>;
}

export default Transaction;