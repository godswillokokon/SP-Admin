import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {
    opacity: 0;
}

to {
    opacity: 1;
}
`;

export default styled.div`
	animation: ${fadeIn} 0.5s ease-in-out;
`;
