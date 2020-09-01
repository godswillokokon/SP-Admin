import React from "react";
import Styled from "styled-components";
import Loader from "./Loader";

export default function Tabs({ tabs, loading }) {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <>
      {loading && <Loader />}
      {tabs && tabs.length > 0 && (
        <TabsHeader>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab-title ${
                activeTab === index ? "active" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </TabsHeader>
      )}
      <TabBody>
        {tabs && tabs.length > 0 ? tabs[activeTab].content : ""}
      </TabBody>
    </>
  );
}

const TabsHeader = Styled.div`
    display: flex;
    .tab-title {
        padding-bottom: 15px;
        padding-top: 25px;
        background-color: inherit;
        border: none;
        margin: 0;
        margin-right: 15px;
        outline: none;
    }
    .tab-title.active {
        color: #0daba8;
        border-bottom: 2px solid #0daba8;
        outline: none;
      }
`;

const TabBody = Styled.div`
padding-top: 25px;
position: relative;
box-sizing: border-box;
text-align: center;
`;
