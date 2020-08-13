import React from "react";
import Skeleton from "react-loading-skeleton";
import Styled from "styled-components";

const LoaderCont = Styled.div`
  display: flex;
  .load {
    margin-left: 10px;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    .load {
      padding-bottom: 10px;
    }
  }

`;

export default function ListLoader({ number = 3 }) {
  const list = [...Array(number).keys()];

  return (
    <LoaderCont>
      {list.map((_, index) => (
        <div className="load" key={index}>
          <Skeleton width={314} height={460} />
        </div>
      ))}
    </LoaderCont>
  );
}
