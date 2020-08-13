import React from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import { PropertiesContainer } from "./styles";
import Property from "./components/property";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from "store/property/actions";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import Loader from "./components/Loader";

const Properties = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.properties.data);
  const loading = useSelector((state) => state.properties.loading);
  const match = useRouteMatch();
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    dispatch(getHouses(currentPage + 1));
  }, [dispatch, currentPage]);

  return (
    <Content>
      <Content.TitleHeader>
        <div
          style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}
        >
          <Content.Title>Properties View</Content.Title>
          <Content.Subtitle>
            All Properties available on spread pro
          </Content.Subtitle>
        </div>
        <Content.HeaderButton>
          <Button url={`${match.path}/new`} round>
            Add Property
          </Button>
        </Content.HeaderButton>
      </Content.TitleHeader>
      {loading ? (
        <Loader />
      ) : (
        <PropertiesContainer>
          {houses?.houses?.data?.map((value, key) => (
            <Property key={key} value={value} />
          ))}
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={currentPage <= 1}>
              <PaginationLink
                previous
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>

            {[...Array(houses?.houses?.last_page)].map((_, index) => (
              <PaginationItem
                active={index === currentPage}
                key={index}
              >
                <PaginationLink
                  onClick={() => {
                    setCurrentPage(index);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem
              disabled={currentPage + 1 === houses?.houses?.last_page}
            >
              <PaginationLink
                next
                onClick={() => setCurrentPage(currentPage + 1)}
              />
            </PaginationItem>
          </Pagination>
        </PropertiesContainer>
      )}
    </Content>
  );
};

export default Properties;
