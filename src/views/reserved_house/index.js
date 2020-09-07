import React from "react";
import Content from "../styles/Content";
import { PropertiesContainer } from "./styles";
import Property from "./components/property";
import { useDispatch, useSelector } from "react-redux";
import { getReservedHouse } from "store/reservedHouse/actions";

const ReservedHouse = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.reservedHouse.data);

  React.useEffect(() => {
    dispatch(getReservedHouse());
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

export default ReservedHouse;
