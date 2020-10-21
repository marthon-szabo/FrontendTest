import React from "react";
import styled from "styled-components";

export default function ColorPalette(props) {
	const DIV = styled.div`
		width: 10vw;
		height: 10vh;
	`;

	return (
		<div>
			<DIV style={{ backgroundColor: `#${props.themes[0]}` }} />
			<DIV style={{ backgroundColor: `#${props.themes[1]}` }} />
			<DIV style={{ backgroundColor: `#${props.themes[2]}` }} />
			<DIV style={{ backgroundColor: `#${props.themes[3]}` }} />
			<DIV style={{ backgroundColor: `#${props.themes[4]}` }} />
		</div>
	);
}
