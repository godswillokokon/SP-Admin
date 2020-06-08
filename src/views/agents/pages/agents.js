import React, { useEffect } from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import { Card, CardBody, Table } from "reactstrap";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAgent } from "store/agent/actions";
import { ButtonGroupContainer } from "./styles";

export default () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const agents = useSelector((state) => state.agent.data);

  useEffect(() => {
    dispatch(fetchAllAgent());
  }, [dispatch]);

  console.log(agents);
  return (
    <Content>
      <Content.TitleHeader>
        <div style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}>
          <Content.Title>All Agents </Content.Title>
          <Content.Subtitle>
            All Adgents registered on spread pro
          </Content.Subtitle>
        </div>
        <Content.HeaderButton>
          <Button url={`${match.path}/new`} round>
            Add Property
          </Button>
        </Content.HeaderButton>
      </Content.TitleHeader>
      <Card className="card-user">
        <CardBody>
          <Table responsive>
            <thead className="text-primary">
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Date of Creation</th>
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody>
              {agents !== null ? (
                Object.entries(agents).map(([key, value]) => {
                  const cdate = new Date(value?.created_at).toDateString();
                  return (
                    <tr key={key}>
                      <td>{value?.name}</td>
                      <td>{value?.email}</td>
                      <td>{value?.phone}</td>
                      <td>{cdate}</td>
                      <td>
                        <ButtonGroupContainer>
                          <Button small danger>
                            Delete
                          </Button>
                        </ButtonGroupContainer>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <div>No data</div>
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Content>
  );
};
