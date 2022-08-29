import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		fireDb.child("contacts").on("value", (snapshot) => {
			if (snapshot.val() !== null) {
				setData({ ...snapshot.val() });
			} else {
				setData({});
			}
		});

		return () => {
			setData({});
		};
	}, [id]);

	useEffect(() => {
		if (id) {
			setState({ ...data[id] });
		} else {
			setState({ ...initialState });
		}
		return () => {
			setState({ ...initialState });
		};
	}, [id, data]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	const handleSubmit = () => {
		if (!name || !email || !contact) {
			alert("Please provide value in each input field");
		} else {
			if (!id) {
				fireDb.child("contacts").push(state, (err) => {
					if (err) {
						alert(err);
					} else {
						alert("Contact added successfully");
					}
				});
			} else {
				fireDb.child(`contacts/${id}`).set(state, (err) => {
					if (err) {
						alert(err);
					} else {
						alert("Contact updated successfully");
					}
				});
			}

			console.log(state);
			navigate("/");
		}
	};
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
					value={name || ""}
					onChange={handleInputChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Your Email"
					value={email || ""}
					onChange={handleInputChange}
				/>
				<label htmlFor="contact">contact</label>
				<input
					type="number"
					name="contact"
					id="contact"
					placeholder="Your Contact"
					value={contact || ""}
					onChange={handleInputChange}
				/>
				<input type="submit" value={id ? "Update" : "Save"} />
			</form>
			<h2>Add Edit</h2>
		</div>
	);
};

export default AddEdit;
