import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBarLayout(props) {
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="#home">FrontendTest</Navbar.Brand>
		</Navbar>
	);
}
