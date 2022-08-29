import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link } from "react-router-dom";

const Home = () => {
	const [data, setData] = useState({});

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
	}, []);

	const onDelete = (id) => {
		if (window.confirm("Are you sure you want to delete the contact")) {
			fireDb.child(`contacts/${id}`).remove((err) => {
				if (err) {
					alert(err);
				} else {
					alert("Contact deleted successfully");
				}
			});
		}
	};

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>No</th>
						<th>Name</th>
						<th>Email</th>
						<th>Contact</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{Object.keys(data).map((id, index) => {
						return (
							<tr key={id}>
								<th>{index + 1}</th>
								<td>{data[id].name}</td>
								<td>{data[id].email}</td>
								<td>{data[id].contact}</td>
								<td>
									<Link to={`/update/${id}`}>
										<button>Edit</button>
									</Link>
									<button
										onClick={() => {
											onDelete(id);
										}}
									>
										Delete
									</button>
									<Link to={`/view/${id}`}>
										<button>View</button>
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Home;
