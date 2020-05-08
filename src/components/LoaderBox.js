import React from "react";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const LoaderBox = () => (
	<Container>
		<Loader size={20} />
	</Container>
);

export default LoaderBox;
