import React from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import { Card, CardBody } from "reactstrap";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CareerContainer } from "./styles";

import Promo from "./componets/promo";
import { toastSuccess } from "utils/Toast";
import { fetchAllPromo, activatePromo } from "store/promotions/actions";
import { deactivatePromo } from "store/promotions/actions";

export default () => {
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const promo = useSelector((state) => state.promotions.data);
  const [activateLoading, setActivateLoading] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchAllPromo());
  }, [dispatch]);

  const handleDelete = (id) => {
    // dispatch(deleteCareer(id)).then(() => {
    //   dispatch(fetchAllCareer());
    //   console.log(careers);
    // });
  };
  const handleActivate = (id, name) => {
    setActivateLoading(true);
    dispatch(activatePromo(id)).then(() => {
      dispatch(fetchAllPromo());
      setActivateLoading(false);
      toastSuccess(`${name} Successfully Activated`);
    });
  };
  const handleDeactivate = (id, name) => {
    dispatch(deactivatePromo(id)).then(() => {
      dispatch(fetchAllPromo());
      setActivateLoading(false);
      toastSuccess(`${name} Successfully Deactivated`);
    });
  };

  console.log(promo);
  return (
    <Content>
      <Content.TitleHeader>
        <div style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}>
          <Content.Title>All Promotions </Content.Title>
          <Content.Subtitle>All Promotions on spread pro</Content.Subtitle>
        </div>
        <Content.HeaderButton>
          <Button url={`${match.path}/new`} round>
            Add Promotions
          </Button>
        </Content.HeaderButton>
      </Content.TitleHeader>
      <Card className="card-user">
        <CardBody>
          <CareerContainer>
            {promo !== null
              ? promo?.data?.map((value, key) => (
                  <Promo
                    key={key}
                    value={value}
                    activateLoading={activateLoading}
                    onDetele={() => {
                      handleDelete(value?.id);
                    }}
                    onDeactive={() => {
                      handleDeactivate(value.id, value?.name);
                    }}
                    onEdit={() => {
                      history.push({
                        pathname: `${match.path}/update`,
                        state: { detail: value },
                      });
                    }}
                    onActivate={() => {
                      handleActivate(value?.id, value?.name);
                    }}
                  />
                ))
              : ""}
          </CareerContainer>
        </CardBody>
      </Card>
    </Content>
  );
};
