import styled, { keyframes } from "styled-components";
import { screen_md } from "@styled/styles";

export const SimpleCard = styled.div<{ empty?: boolean; minHeight?: number[] }>`
	position: relative;
	min-height: ${({ minHeight = [240, 300] }) => minHeight[0]}px;
	background-color: ${({ empty }) => (empty ? "#f3f3f3" : "#ffffff")};
	overflow: hidden;
	cursor: pointer;

	@media (min-width: ${screen_md}) {
		min-height: ${({ minHeight = [240, 300] }) => minHeight[1]}px;
	}

	& img {
		position: absolute;
		width: 100%;
		height: 100%;
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

		@media (max-width: ${screen_md}) {
			font-size: 1.25rem;
		}
	}

	& > p {
		margin: 0;
	}
`;

const pulse = keyframes`
  0% { background-color: #dfdcdc; }
  50% { background-color: #f3f3f3; }
  100% { background-color: #dfdcdc; }
`;

export const SimpleCardEmptyText = styled.div`
	border-radius: 6px;
	animation: ${pulse} 4s infinite;
`;
