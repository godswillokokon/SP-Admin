import React from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import { Card, CardBody } from "reactstrap";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CareerContainer } from "./styles";
import { fetchAllCareer, deleteCareer } from "store/career/actions";
import Career from "./componets/career";
import { toastSuccess } from "utils/Toast";

export default () => {
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  const careers = useSelector((state) => state.career.data);

  React.useEffect(() => {
    dispatch(fetchAllCareer());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCareer(id)).then(() => {
      dispatch(fetchAllCareer());
      console.log(careers);
      toastSuccess("Successfully Deleted");
    });
  };

  return (
    <Content>
      <Content.TitleHeader>
        <div style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}>
          <Content.Title>All Careers </Content.Title>
          <Content.Subtitle>
            All Careers registered on spread pro
          </Content.Subtitle>
        </div>
        <Content.HeaderButton>
          <Button url={`${match.path}/new`} round>
            Add Career
          </Button>
        </Content.HeaderButton>
      </Content.TitleHeader>
      <Card className="card-user">
        <CardBody>
          <CareerContainer>
            {careers !== null
              ? careers?.careers.map((value, key) => (
                  <Career
                    key={key}
                    value={value}
                    onDetele={() => {
                      handleDelete(value?.id);
                    }}
                    onEdit={() => {
                      history.push({
                        pathname: `${match.path}/update`,
                        state: { detail: value },
                      });
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
