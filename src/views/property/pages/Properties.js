import React from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import { PropertiesContainer } from "./styles";
import Property from "./components/property";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHouses, getLands } from "store/property/actions";
import Loader from "./components/Loader";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Properties = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState("Houses");
  const [properties, setProperties] = React.useState([]);
  const [dropdownOpen, setOpen] = React.useState(false);
  const houses = useSelector((state) => state.properties.data);
  const lands = useSelector((state) => state.properties.landData);
  const loading = useSelector((state) => state.properties.loading);
  const match = useRouteMatch();
  const [currentPage, setCurrentPage] = React.useState(6);
  const history = useHistory();
  const toggle = () => setOpen(!dropdownOpen);

  React.useEffect(() => {
    sort === "Houses"
      ? dispatch(getHouses(currentPage))
      : dispatch(getLands(currentPage));
  }, [dispatch, currentPage, sort]);

  React.useEffect(() => {
    sort === "Houses"
      ? setProperties(houses?.houses)
      : setProperties(lands?.data);
  }, [sort, houses, lands]);

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
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Sort Properties</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Sort By</DropdownItem>
          <DropdownItem onClick={() => setSort("Houses")}>
            Houses
          </DropdownItem>
          <DropdownItem onClick={() => setSort("Lands")}>
            Lands
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PropertiesContainer>
            {properties?.map((value, key) => (
              <Property
                key={key}
                value={value}
                onAction={() =>
                  history.push({
                    pathname: "/admin/properties/edit",
                    state: { details: value },
                  })
                }
              />
            ))}
          </PropertiesContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button onClick={() => setCurrentPage(currentPage + 6)}>
              Load More
            </Button>
          </div>
        </>
      )}
    </Content>
  );
};

export default Properties;
