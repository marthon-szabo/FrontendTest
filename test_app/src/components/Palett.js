import React, { useState, useEffect } from "react";
import ColorPalette from "./ColorPalette";
import styled from "styled-components";
import devices from "../layouts/BreakPoint";

export default function Palett(props) {
	const [palettes, setPalettes] = useState([]);
	let bottomCounter = 0;

	useEffect(() => {
		apiRequest();
	}, [bottomCounter]);

	const apiRequest = () => {
		fetch(
			`http://www.colourlovers.com/api/palettes/new?format=json&numResults=10&resultOffset=${bottomCounter}`
		)
			.then((resp) => resp.json())
			.then((respAsJson) =>
				setPalettes((prevPalettes) => [...prevPalettes, ...respAsJson])
			)
			.catch((error) => console.error(error));
	};

	window.onscroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			bottomCounter += 10;
			apiRequest();
			console.log(bottomCounter);
		}
	};

	const PaletteDiv = styled.div`
		color: white;
		font-family: Trebuchet MS, sans-serif;
		#stats {
			background-color: #0066cc;
			border-radius: 2px;
		}
		@media ${devices.mobile} {
			border: 0.2vh solid black;
			border-radius: 0.6vh;
			margin-top: 1vh;
			margin-right: 1vh;
			#title {
				font-size: 4vh;
			}

			#additional,
			#stats {
				font-size: 2vh;
			}
			#stats {
				margin-right: 70vw;
			}
		}
	`;

	return (
		<div>
			{palettes.map((palette) => (
				<PaletteDiv key={palette.id}>
					<div>
						<span id="title">{palette.title}</span>
						<br />
						<span id="additional">
							by {palette.userName} at {palette.dateCreated}
						</span>
						<div id="stats">
							{palette.numViews} views {palette.numVotes} vote
						</div>
					</div>
					<ColorPalette themes={palette.colors} />
				</PaletteDiv>
			))}
		</div>
	);
}
