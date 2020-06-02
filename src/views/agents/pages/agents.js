import React from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  ButtonGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { useRouteMatch } from "react-router-dom";

export default () => {
  const match = useRouteMatch();
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
                <th>Verified</th>
                <th>Date of Registration</th>
                <th className="">Actions</th>
              </tr>
            </thead>
          </Table>
        </CardBody>
      </Card>
    </Content>
  );
};
