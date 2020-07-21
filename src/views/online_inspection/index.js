import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import LoadingPage from "views/components/LoadingPage";
import { fetchOnlineInspection } from "store/onlineInspection/actions";

import { getSingleHouse } from "store/property/actions";

export default () => {
  const onlineInspection = useSelector((state) => state.onlineInspection.data);
  const [houses, setHouses] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOnlineInspection());
  }, [dispatch]);

  useEffect(() => {
    if (onlineInspection !== null) {
      let allHouses = [];
      onlineInspection.onlineInspections.forEach((item, index) => {
        dispatch(getSingleHouse(item.property_slug)).then((value) => {
          allHouses[index] = value.value.data.house;
        });
      });
      setHouses(allHouses);
    }
  }, [onlineInspection, dispatch]);

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h4">Online Inspection</CardTitle>
            <p className="card-category">
              Payment for online inspection details
            </p>
          </CardHeader>
          <CardBody>
            {houses.length === onlineInspection?.onlineInspections.length ? (
              <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th>Property Name</th>
                    <th>Email Address</th>
                    <th> Property Type </th>
                    <th>Date of Inspection</th>
                    <th>Inspection due date</th>
                  </tr>
                </thead>
                <tbody>
                  {onlineInspection?.onlineInspections.map((item, index) => {
                    const date_inspected = new Date(
                      item?.date_inspected
                    ).toDateString();
                    const inspection_due = new Date(
                      item?.inspection_due
                    ).toDateString();
                    console.log(houses[index]);
                    return (
                      <tr key={index}>
                        <td>{houses[index]?.name}</td>
                        <td>{item?.email}</td>
                        <td>{item?.property_type}</td>
                        <td>{date_inspected}</td>
                        <td>{inspection_due}</td>
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
