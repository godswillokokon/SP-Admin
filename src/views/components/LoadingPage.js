import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import FadeIn from "styles/FadeIn";

const Container = styled.div`
  span {
    margin-top: 100px;
  }
`;

export default function LoadingPage({ noHeader }) {
  return (
    <FadeIn>
      <Container>
        {!noHeader && <Skeleton width={150} height={50} />}
        <Skeleton height={300} />
      </Container>
    </FadeIn>
  );
}
