import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  fetchAllExperts,
  approveExpert,
  rejectExpert,
} from "store/experts/actions";

export default () => {
  const experts = useSelector((state) => state.experts.data);
  // const loading = useSelector((state) => state.allUsers.loading);
  // const actionLoading = useSelector((state) => state.allUsers.actionLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllExperts());
  }, [dispatch, experts]);

  const handleApproveExpert = (id) => {
    dispatch(approveExpert(id)).then(() => {
      dispatch(fetchAllExperts());
      toastSuccess("Expert aprroved Successfully");
    });
  };
  const handleRejectExpert = (id) => {
    dispatch(rejectExpert(id)).then(() => {
      dispatch(fetchAllExperts());
      toastSuccess("Expert has Rejected Successfully");
    });
  };
  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h4">Experts</CardTitle>
            <p className="card-category">List of Experts</p>
          </CardHeader>
          <CardBody>
            {experts !== null ? (
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th> Name</th>
                    <th> Email</th>
                    <th>Phone Number</th>
                    <th>Career Name</th>
                    <th>Years of Experience</th>
                    <th>Status</th>
                    <th className="">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {experts.experts.map(([key, value]) => {
                    const cdate = new Date(value?.created_at).toDateString();
                    return (
                      <tr key={key}>
                        <td>{value?.user?.name}</td>
                        <td>{value?.user?.email}</td>
                        <td>{value?.user?.phone}</td>
                        <td>{value?.career?.name}</td>
                        <td>{value?.years_of_experience}</td>
                        <td>
                          {value?.approved === 0 ? "Not Approve" : "Approved"}
                        </td>

                        <td className="">
                          <ButtonGroupContainer>
                            <Button small primary>
                              View
                            </Button>
                            <Button
                              small
                              success
                              onClick={() => {
                                handleApproveExpert(value?.id);
                              }}
                            >
                              Approve
                            </Button>
                            <Button
                              small
                              danger
                              onClick={() => {
                                handleRejectExpert(value?.id);
                              }}
                            >
                              Reject
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
