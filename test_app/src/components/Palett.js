import React, { useState, useEffect } from "react";
import ColorPalette from "./ColorPalette";

export default function Palett() {
	const [palettes, setPalettes] = useState([]);

	useEffect(() => {
		apiRequest();
	}, []);

	const apiRequest = () => {
		fetch(
			"http://www.colourlovers.com/api/palettes/new?format=json&numResults=10"
		)
			.then((resp) => resp.json())
			.then((respAsJson) => setPalettes(respAsJson))
			.catch((error) => console.error(error));
	};

	const scrollEventHandler = (e) => {};

	console.log(palettes);

	// const PalettDiv = styled.div``;
	return (
		<div onScroll={apiRequest()}>
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
