import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

export default function NavBarLayout(props) {
	return (
		<Navbar
			bg="primary"
			variant="dark"
			style={{ boxShadow: "box-shadow: 5px 10px #888888" }}
		>
			<Navbar.Brand href="#home">FrontendTest</Navbar.Brand>
		</Navbar>
	);
}
