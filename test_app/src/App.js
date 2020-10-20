import React, { Fragment } from "react";
import logo from "./logo.svg";
import NavBarLayout from "./layouts/NavBar";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div>
			<NavBarLayout />
			<BrowserRouter path="/">
				<Home />
			</BrowserRouter>
		</div>
	);
}

export default App;
