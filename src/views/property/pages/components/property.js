import React from "react";
import { PropertyCard } from "../styles";
import Feat1 from "assets/img/f1.png";
import Feat2 from "assets/img/f2.png";
import Feat3 from "assets/img/f3.png";
import Feat4 from "assets/img/f4.png";
import { formatMoney } from "utils/formatter";

const Property = ({ onAction, value }) => {
  let price = formatMoney(value?.price);
  return (
    <PropertyCard onClick={onAction}>
      <div className="content">
        <div className="body">
          <img
            className="img-thumbnail"
            src={
              value?.house_image
                ? value?.house_image[0]?.img_url
                : value?.land_image[0]?.img_url
            }
            alt=""
          />
          <h6 className="price">{price}</h6>
          <h5 className="title">{value?.name}</h5>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Aliquam
            gravida magna et fringilla convallis. Pellentesque habitant morb
          </p>
          <span className="location">{value?.location}</span>
          <div className="features">
            <span>
              <img src={Feat1} alt="" />
              <span>22</span>
            </span>
            <span>
              <img src={Feat2} alt="" />
              <span>2</span>
            </span>
            <span>
              <img src={Feat3} alt="" />
              <span>252</span>
            </span>
            <span>
              <img src={Feat4} alt="" />
              <span>322</span>
            </span>
          </div>
        </div>
      </div>
    </PropertyCard>
  );
};

export default Property;
