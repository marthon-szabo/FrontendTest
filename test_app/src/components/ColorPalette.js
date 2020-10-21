import React from "react";
import styled from "styled-components";
import devices from "../layouts/BreakPoint";

export default function ColorPalette(props) {
	const DIV = styled.div`
		width: auto;
		height: auto;
		display: flex;
		flex-flow: nowrap;

		@media ${devices.mobile} {
			margin-left: 80vw;
			margin-top: -10vh;
		}

		@media ${devices.tablet} {
			margin-left: 60vw;
			margin-top: -10vh;
		}
	`;

	const ColorDiv = styled.div`
		@media ${devices.mobile} {
			width: 12px;
			height: 60px;
			margin-bottom: 12px;
		}

		@media ${devices.tablet} {
			width: 70px;
			height: 120px;
			margin-bottom: 12px;
		}
	`;

	return (
		<DIV>
			<ColorDiv style={{ backgroundColor: `#${props.themes[0]}` }} />
			<ColorDiv style={{ backgroundColor: `#${props.themes[1]}` }} />
			<ColorDiv style={{ backgroundColor: `#${props.themes[2]}` }} />
			<ColorDiv style={{ backgroundColor: `#${props.themes[3]}` }} />
			<ColorDiv style={{ backgroundColor: `#${props.themes[4]}` }} />
		</DIV>
	);
}
