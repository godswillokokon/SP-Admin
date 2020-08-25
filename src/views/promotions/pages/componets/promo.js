import React from "react";
import { CareerCard, ButtonGroupContainer } from "../styles";
import Button from "components/Button";

export default ({
  onAction,
  onDetele,
  onActivate,
  onDeactive,
  onEdit,
  value,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [activateLoading, setActivateLoading] = React.useState(false);
  return (
    <CareerCard onClick={onAction}>
      <div className="content">
        <img src={value?.image} alt="" className="img" />
        <h5 className="title">{value?.name}</h5>
        <p className="description">{value?.description}</p>

        <ButtonGroupContainer>
          <Button
            success={!value.active}
            warning={value.active}
            loading={activateLoading}
            onClick={() => {
              setActivateLoading(true);
              if (!value.active) {
                onActivate();
              } else {
              }
            }}
          >
            {!value.active ? "Activate" : "Deactivate"}
          </Button>

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
