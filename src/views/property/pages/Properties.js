import React from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import { PropertiesContainer } from "./styles";
import Property from "./components/property";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getHouses } from "store/property/actions";

const Properties = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.properties.data);
  const match = useRouteMatch();

  React.useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  return (
    <Content>
      <Content.TitleHeader>
        <div style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}>
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
      <PropertiesContainer>
        {houses !== null
          ? houses.houses.map((value, key) => (
              <Property key={key} value={value} />
            ))
          : ""}
      </PropertiesContainer>
    </Content>
  );
};

export default Properties;
