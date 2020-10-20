import React, { Fragment } from "react";
import logo from "./logo.svg";
import NavBarLayout from "./layouts/NavBar";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Home from "./components/Home";
import { Route } from "react-router";

function App() {
	return (
		<div>
			<NavBarLayout />
			<Route exact path="/">
				<Home />
			</Route>
		</div>
	);
}

export default App;
