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
    <CareerCard>
      <div className="content">
        <img src={value?.image} alt="" className="img" />
        <h5 className="title">{value?.name}</h5>
        <p className="description">{value?.description}</p>

        <ButtonGroupContainer>
          <Button
            success={!value.active}
            warning={value.active}
            loading={activateLoading}
            small
            onClick={async () => {
              setActivateLoading(true);
              if (!value.active) {
                await onActivate();
                setActivateLoading(false);
              } else {
                await onDeactive();
                setActivateLoading(false);
              }
            }}
          >
            {!value.active ? "Activate" : "Deactivate"}
          </Button>
          <Button
            small
            onClick={() => {
              onEdit();
            }}
          >
            Edit
          </Button>
          <Button
            danger
            loading={loading}
            small
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
