import React, { useState } from 'react';

import { TextField, TextareaAutosize } from '@mui/material';

const ContactPage = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleChange = (newValue, type) => {
		let newVal = newValue;
		if (newValue === undefined || newValue === null) {
			newVal = "";
		}

		switch(type) {
			case "firstName":
				setFirstName(newVal);
				break;
			case "lastName":
				setLastName(newVal);
				break;
			case "email":
				setEmail(newVal);
				break;
			case "message":
				setMessage(newVal);
				break;
		}
	}

	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				marginTop: "20px",
				rowGap: "10px"
			}}
		>
			<TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={(event) => {
				handleChange(event.target.value, "firstName");
			}}/>
			<TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={(event) => {
				handleChange(event.target.value, "lastName");
			}}/>
			<TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => {
				handleChange(event.target.value, "email");
			}}/>
			<TextareaAutosize id="outlined-basic" minRows={10} style={{ width: 400 }} placeholder="Enter Message" value={message}
				onChange={(event) => {
					handleChange(event.target.value, "message");
				}}
			/>
		</form>
	);
}

export default ContactPage;