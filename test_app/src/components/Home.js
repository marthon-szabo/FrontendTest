import React from "react";
import styled from "styled-components";
import Palett from "./Palett";

export default function Home() {
	const DIV = styled.div`
		background-color: #0066ff;
		width: 100vw;
		height: 100vh;
	`;

	return (
		<DIV>
			<Palett />
		</DIV>
	);
}
