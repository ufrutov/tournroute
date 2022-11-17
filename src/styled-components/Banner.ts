import styled, { css } from "styled-components";

export const Banner = styled.div<{ withMap?: boolean }>`
	position: relative;
	${({ withMap = false }) =>
		withMap
			? css`
					height: 50vh;
			  `
			: css`
					min-height: 35vh;
			  `}

	.container {
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		color: #fff;
	}

	& > span {
		min-height: 400px !important;
	}

	& img {
		object-fit: cover;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	& > #map {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}
`;
