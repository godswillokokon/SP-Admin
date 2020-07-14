import React from "react";
import { CareerCard, ButtonGroupContainer } from "../styles";
import Button from "components/Button";
import { useSelector } from "react-redux";

export default ({ onAction, onDetele, value }) => {
  const { actionLoading } = useSelector((state) => state.career);
  const [loading, setLoading] = React.useState(false);
  return (
    <CareerCard onClick={onAction}>
      <div className="content">
        <img src={value?.image} alt="" className="img" />
        <h5 className="title">{value?.name}</h5>
        <p className="description">{value.description}</p>

        <ButtonGroupContainer>
          <Button>Update</Button>
          <Button
            danger
            loading={loading}
            onClick={() => {
              setLoading(true);
              onDetele();
            }}
          >
            Delete
          </Button>
        </ButtonGroupContainer>
      </div>
    </CareerCard>
  );
};
