import React from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import { PropertiesContainer } from "./styles";
import Property from "./components/property";
import CategoriesList from "./components/categoriesList";
import { useRouteMatch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHouses, getLands } from "store/property/actions";
import Loader from "./components/Loader";
import Input from "components/Input";
import {
  createHouseCategory,
  createLandCategory,
} from "store/categories/actions";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Modal from "components/Modal";
import Tabs from "components/Tabs";
import {
  getHouseCategories,
  getLandCategories,
} from "store/categories/actions";
import Styled from "styled-components";
import { toastSuccess } from "utils/Toast";

const Properties = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = React.useState(false);
  const [sort, setSort] = React.useState("Houses");
  const [houseCategory, setHouseCategory] = React.useState({});
  const [landCategory, setLandCategory] = React.useState({});
  const [properties, setProperties] = React.useState([]);
  const [dropdownOpen, setOpen] = React.useState(false);
  const houses = useSelector((state) => state.properties.data);
  const lands = useSelector((state) => state.properties.landData);
  const loading = useSelector((state) => state.properties.loading);
  const actionLoading = useSelector(
    (state) => state.categories.actionLoading
  );
  const housesCategories = useSelector(
    (state) => state?.categories?.data?.house_categories
  );
  const landsCategories = useSelector(
    (state) => state?.categories?.landCategories
  );
  const match = useRouteMatch();
  const [currentPage, setCurrentPage] = React.useState(6);
  const history = useHistory();
  const toggle = () => setOpen(!dropdownOpen);

  React.useEffect(() => {
    dispatch(getHouseCategories());
    dispatch(getLandCategories());
  }, [dispatch]);

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
    <>
      <Modal
        isOpen={modal}
        onClose={() => setModal(!modal)}
        width={500}
        children={
          <>
            <Tabs
              tabs={[
                {
                  title: "Houses",
                  content: (
                    <>
                      <h6>Add House Category</h6>
                      <TabForm>
                        <Input
                          placeholder="House Category Name"
                          id="house_category"
                          name="house_category"
                          fullwidth
                          onChange={(e) => {
                            houseCategory.house_category =
                              e.target.value;
                            setHouseCategory({ ...houseCategory });
                          }}
                        />
                        <Button
                          loading={actionLoading}
                          onClick={() => {
                            dispatch(
                              createHouseCategory(houseCategory)
                            ).then((res) => {
                              if (res) {
                                dispatch(getHouseCategories());
                                toastSuccess(
                                  "House Category Created Successfully"
                                );
                                setHouseCategory({});
                              }
                            });
                          }}
                        >
                          Submit
                        </Button>
                      </TabForm>
                      <CategoriesList
                        categories={housesCategories}
                        type={"house"}
                      />
                    </>
                  ),
                },
                {
                  title: "Lands",
                  content: (
                    <>
                      <h6>Add Land Category</h6>
                      <TabForm>
                        <Input
                          placeholder="Land Category Name"
                          id="land_category"
                          name="land_category"
                          fullwidth
                          onChange={(e) => {
                            landCategory.land_category =
                              e.target.value;
                            setLandCategory({ ...landCategory });
                          }}
                        />
                        <Button
                          loading={actionLoading}
                          onClick={() => {
                            dispatch(
                              createLandCategory(landCategory)
                            ).then((res) => {
                              if (res) {
                                dispatch(getLandCategories());
                                toastSuccess(
                                  "Land Category Created Successfully"
                                );
                                setLandCategory({});
                              }
                            });
                          }}
                        >
                          Submit
                        </Button>
                      </TabForm>
                      <CategoriesList
                        categories={landsCategories}
                        type={"land"}
                      />
                    </>
                  ),
                },
              ]}
            />
          </>
        }
      />
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
            <Button onClick={() => setModal(!modal)} round>
              Spread Categories
            </Button>
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
    </>
  );
};

export default Properties;

const TabForm = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 10px;
  }
`;
