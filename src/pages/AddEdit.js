import React, { useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import fireDb from "../firebase";

const initialState = {
	name: "",
	email: "",
	contact: "",
};

const AddEdit = () => {
	const [state, setState] = useState(initialState);
	const [data, setData] = useState({});
	const { name, email, contact } = state;

	const handleInputChange = (e) => {
		// const { name, value } = e.target;
		// setState({ ...state, [name]: value });
	};
	const handleSubmit = () => {};
	return (
		<div style={{ marginTop: "100px" }}>
			<form
				style={{
					margin: "auto",
					padding: "15px",
					maxWidth: "400px",
					alignContent: "center",
				}}
				onSubmit={handleSubmit}
			>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Your Name"
					value={name}
					onChange={handleInputChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your Email"
					value={email}
					onChange={handleInputChange}
				/>
				<label htmlFor="contact">contact</label>
				<input
					type="number"
					name="contact"
					id="contact"
					placeholder="Your Contact"
					value={contact}
					onChange={handleInputChange}
				/>
				<input type="submit" value="save" />
			</form>
			<h2>Add Edit</h2>
		</div>
	);
};

export default AddEdit;
