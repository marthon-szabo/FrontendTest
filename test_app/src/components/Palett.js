import React, { useState, useEffect } from "react";
import ColorPalette from "./ColorPalette";

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

	// const body = document.body;
	// document.addEventListener("scroll", () => {
	// console.log(body.clientHeight);
	// if (body.scrollHeight - body.scrollTop == body.clientHeight) {
	// alert("End");
	// }
	// });

	window.onscroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
			bottomCounter += 10;
			apiRequest();
			console.log(bottomCounter);
		}
	};
	// const PalettDiv = styled.div``;
	return (
		<div>
			{palettes.map((palette) => (
				<div key={palette.id}>
					<div>
						<p>{palette.title}</p>
						<p>
							by {palette.userName} at {palette.dateCreated}
						</p>
						<div>
							{palette.numViews} views {palette.numVotes} vote
						</div>
					</div>
					<ColorPalette themes={palette.colors} />
				</div>
			))}
		</div>
	);
}
