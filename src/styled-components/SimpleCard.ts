import styled from "styled-components";

export const SimpleCard = styled.a`
	display: block;
	min-height: 300px;
	cursor: pointer;

	& > div {
		position: relative;
		height: 100%;
	}

	& img {
		object-fit: cover;
		transition: transform 1s;
	}

	&:hover img {
		transform: scale(1.15);
	}
`;

export const SimpleCardText = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 1;
	color: #ffffff;
	background: linear-gradient(
		0deg,
		rgba(0, 0, 0, 0.5) 0%,
		rgba(0, 0, 0, 0.3) 35%,
		rgba(0, 0, 0, 0) 100%
	);

	& > h2 {
		font-weight: 600;
		margin-bottom: 0.1rem;
	}

	& > p {
		margin: 0;
	}
`;
