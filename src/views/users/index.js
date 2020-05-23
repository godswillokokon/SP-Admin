import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  ButtonGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

export default () => {
  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h4">Users</CardTitle>
            <p className="card-category">List of users using registered</p>
          </CardHeader>
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
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>Oud-Turnhout</td>
                    <td>skwkk</td> <td>kwkwkw</td>
                    <td className="">
                      <ButtonGroup size="sm">
                        <Button size="sm" color="primary">
                          Update
                        </Button>
                        <Button size="sm" color="danger">
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination size="sm" aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

const data = [
  {
    email: "godswillokokoneffiong@testing.com",
    name: "Godswill okokon effion",
  },
  {
    email: "godswillokokoneffiong@testing.com",
    name: "Godswill okokon effion",
  },
  {
    email: "godswillokokoneffiong@testing.com",
    name: "Godswill okokon effion",
  },
  {
    email: "godswillokokoneffiong@testing.com",
    name: "Godswill okokon effion",
  },
  {
    email: "godswillokokoneffiong@testing.com",
    name: "Godswill okokon effion",
  },
  {
    email: "godswillokokoneffiong@testing.com",
    name: "Godswill okokon effion",
  },
  {
    email: "godswillokokoneffiong@testing.com",
    name: "Godswill okokon effion",
  },
  {
    email: "godswillokokoneffiong@testing.com",
    name: "Godswill okokon effion",
  },
];
