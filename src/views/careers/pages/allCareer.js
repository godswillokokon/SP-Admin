import React from "react";
import Content from "../../styles/Content";
import Button from "components/Button";
import { useRouteMatch } from "react-router-dom";

export default () => {
  const match = useRouteMatch();
  return (
    <Content>
      <Content.TitleHeader>
        <div style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}>
          <Content.Title>All Careers </Content.Title>
          <Content.Subtitle>
            All Careers registered on spread pro
          </Content.Subtitle>
        </div>
        <Content.HeaderButton>
          <Button url={`${match.path}/new`} round>
            Add Career
          </Button>
        </Content.HeaderButton>
      </Content.TitleHeader>
    </Content>
  );
};
