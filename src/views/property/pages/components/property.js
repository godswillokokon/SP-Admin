import React from "react";
import { PropertyCard } from "../styles";
import { formatMoney } from "utils/formatter";
import Delete from "assets/img/delete.svg";
import { useSelector, useDispatch } from "react-redux";
import { deleteHouse } from "store/property/actions";
import Dialog from "components/ConfirmDialog"

const Property = ({ onAction, value }) => {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [showDelete, setShowDelete] = React.useState(false);
  const { actionLoading } = useSelector((state) => state.properties)
  const dispatch = useDispatch();
  let price = formatMoney(value?.price);

  const handleDelete = () => {
    dispatch(deleteHouse(value?.house_image ? value?.slug : value?.slug)).then((res) => {
      console.log(res)
    })
  };

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(!openDialog)}
        title={"Delete house"}
        onSubmit={handleDelete}
        description={"Are you sure you want to delete this property?"}
        loading={actionLoading}
        okText={"Yes"}
        cancelText={"No"}
      />
      <div style={{ "max-width": "33.333333%" }}
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}>
        <PropertyCard.Delete
          onClick={() => setOpenDialog(!openDialog)}
          src={Delete} showDelete={showDelete} />
        <PropertyCard
          onClick={onAction}
        >
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
              <h6 className="price">₦{price}</h6>
              <h5 className="title">{value?.name}</h5>
              <p className="description">{value?.overview}</p>
              <span className="location">{value?.location}</span>
            </div>
          </div>
        </PropertyCard>
      </div>
    </>
  );
};

export default Property;
