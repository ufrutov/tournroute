import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
`;

export const PlaceDescription = styled.div`
	position: relative;
	background-color: #ffffff;

	& > #map {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
`;
