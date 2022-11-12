import styled from "styled-components";

export const Banner = styled.div`
	position: relative;
	min-height: 150px;

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
	}
`;
