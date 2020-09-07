import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, deleteUser } from "store/allUsers/actions";
import Button from "components/Button";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { toastSuccess } from "utils/Toast";
import { ButtonGroupContainer } from "views/agents/pages/styles";
import LoadingPage from "views/components/LoadingPage";

export default () => {
  const users = useSelector((state) => state.allUsers.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch, users]);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id)).then(() => {
      dispatch(fetchAllUsers());
      toastSuccess("User Activated Successfully");
    });
  };
  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h4">Users</CardTitle>
            <p className="card-category">
              List of users using registered
            </p>
          </CardHeader>
          <CardBody>
            {users !== null ? (
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
                  {Object.entries(users).map(([key, value]) => {
                    const cdate = new Date(
                      value?.created_at
                    ).toDateString();
                    return (
                      <tr key={key}>
                        <td>{value?.name}</td>
                        <td>{value?.email}</td>
                        <td>{value?.phone}</td>
                        <td>
                          {value?.verified === 0 ? "No" : "Yes"}
                        </td>
                        <td>{cdate}</td>
                        <td className="">
                          <ButtonGroupContainer>
                            <Button small primary>
                              View
                            </Button>
                            <Button
                              small
                              danger
                              onClick={() => {
                                handleDeleteUser(value?.id);
                              }}
                            >
                              Delete
                            </Button>
                          </ButtonGroupContainer>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : (
              <LoadingPage />
            )}

            <Pagination
              size="sm"
              aria-label="Page navigation example"
            >
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
