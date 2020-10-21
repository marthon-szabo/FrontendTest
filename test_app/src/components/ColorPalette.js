import React from "react";
import styled from "styled-components";

export default function ColorPalette(props) {
	return <div style={{ backgroundColor: `${props.themes[0]}` }}></div>;
}
