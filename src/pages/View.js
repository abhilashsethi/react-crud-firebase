import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { useParams, Link } from "react-router-dom";

const View = () => {
	const [user, setUser] = useState({});
	const { id } = useParams();

	useEffect(() => {
		fireDb
			.child(`contacts/${id}`)
			.get()
			.then((snapshots) => {
				if (snapshots.exists()) {
					setUser({ ...snapshots.val() });
				} else {
					setUser({});
				}
			});
	}, [id]);
	console.log("user", user);
	return (
		<div>
			<strong>ID</strong>
			<span>{id}</span>
			<br />
			<br />
			<strong>Name</strong>
			<span>{user.name}</span>
			<br />
			<br />
			<strong>Email</strong>
			<span>{user.email}</span>
			<br />
			<br />
			<strong>Contact</strong>
			<span>{user.contact}</span>
			<br />
			<br />
			<Link to={"/"}>
				<button>Go back to home</button>
			</Link>
		</div>
	);
};

export default View;
