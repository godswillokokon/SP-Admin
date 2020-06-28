import React from "react";
import { CareerCard, ButtonGroupContainer } from "../styles";
import Button from "components/Button";

export default ({ onAction, value }) => {
  return (
    <CareerCard onClick={onAction}>
      <div className="content">
        <img src={value?.image} alt="" className="img" />
        <h5 className="title">{value?.name}</h5>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit Aliquam
          gravida magna et fringilla convallis. Pellentesque habitant morb
        </p>

        <ButtonGroupContainer>
          <Button>Update</Button>
          <Button danger>Delete</Button>
        </ButtonGroupContainer>
      </div>
    </CareerCard>
  );
};
