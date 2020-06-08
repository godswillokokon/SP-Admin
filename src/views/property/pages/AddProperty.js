import React, { useState, useEffect } from "react";
import Content from "../../styles/Content";
import { AddPropertyContainer } from "./styles";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Radio from "components/Radio";
import Select from "components/Select";
import CheckBox from "components/CheckBox";
import ImagesUploader from "components/ImageUploader";
import Button from "components/Button";
import States from "data/states.json";
import LandCategories from "data/landCategories.json";
import VideoPicker from "components/VideoPicker";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createHouse } from "store/property/actions";
import { getHouseCategories } from "store/categories/actions";
import { toastSuccess } from "utils/Toast";

const Properties = () => {
  const [lga, setLga] = useState();
  const [state, setState] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [ammenities, setAmmenities] = useState([]);
  const [houseCategories, setHouseCategories] = useState([]);
  const [propertyType, setPropertyType] = useState();
  const { actionLoading } = useSelector((state) => state.properties);
  const categories = useSelector((state) => state.categories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    let newArr = [];
    categories &&
      categories.house_categories.map((item, index) => {
        const newObj = {
          name: item.house_category,
          options: item.sub_category.map((item, index) => {
            const newInnerObj = {
              id: item.id,
              name: item.subcategory_name,
            };
            return newInnerObj;
          }),
        };
        newArr.push(newObj);
        return newObj;
      });
    setHouseCategories(newArr);
  }, [categories]);

  useEffect(() => {
    dispatch(getHouseCategories());
  }, [dispatch]);

  useEffect(() => {
    if (state) {
      const LGA = States.filter((eachState) => {
        if (eachState.name === state) {
          return true;
        } else {
          return false;
        }
      });
      setLga(LGA[0].locals);
    }
  }, [state]);

  useEffect(() => {
    const select = document.getElementsByName("house_subcategory")[0];
    const optgroups = select.getElementsByTagName("option");
    for (var i = 0; i < optgroups.length; i++) {
      if (optgroups[i]?.getAttribute("value")?.toString() === subCategory) {
        var maincategory = optgroups[i].parentElement.getAttribute("label");
        setCategory(maincategory?.toLowerCase());
        return;
      }
    }
  }, [subCategory]);

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Property name is required";
    }
    if (!values.location) {
      errors.location = "Property location is required";
    }
    if (!values.price) {
      errors.minVolume = "Property price is required";
    }
    if (!values.state) {
      errors.maxVolume = "Property state is required";
    }
    if (!values.transaction) {
      errors.maxVolume = "Property transaction is required";
    }
    if (!values.status) {
      errors.status = "Property Status is required";
    }
    if (!values.overview) {
      errors.overview = "Property overview is required";
    }
    return errors;
  };

  const form = useFormik({
    initialValues: {
      name: "",
      house_category: "",
      house_subcategory: "",
      location: "",
      lga: "",
      state: "",
      is_reserved: "",
      payment_type: "",
      price: "",
      status: "",
      year_built: "",
      image_file: "",
      overview: "",
      coordinates: "",
      amenities: "",
      transaction: "",
      video_url: "",
      car_park: "",
      bathrooms: "",
      rooms: "",
    },
    onSubmit: (values) => {
      values.amenities = ammenities;
      values.house_category = category;
      values.coordinates = "17N 45W 8E 0S";
      console.log(values);
      dispatch(createHouse(values)).then((res) => {
        if (res) {
          console.log(res);
          toastSuccess("Property Created Successfully");
        }
      });
    },
    validate,
    validateOnChange: true,
  });
  const onInputFocus = (name) => () => form.setFieldError(name, undefined);

  return (
    <Content>
      <Content.TitleHeader>
        <div style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}>
          <Content.Back to="/admin/properties">&larr; Back</Content.Back>
          <Content.Title>Properties View</Content.Title>
        </div>
      </Content.TitleHeader>
      <AddPropertyContainer>
        <form onSubmit={form.handleSubmit}>
          <div className="basic-info">
            <Radio
              label="House Property"
              name="propertyType"
              id="houseProperty"
              value="House Property"
              onClick={(e) => {
                setPropertyType(e.target.value);
              }}
            />
            <Radio
              label="Land Property"
              value="Land Property"
              name="propertyType"
              id="landProperty"
              onClick={(e) => {
                setPropertyType(e.target.value);
              }}
            />
          </div>
          <div className="header">
            <h6>category Info</h6>
          </div>
          <div className="basic-info">
            <Select
              name="house_subcategory"
              id="house_subcategory"
              round
              fullWidth
              label="HOUSE CATEGORIES"
              optgroup={houseCategories}
              onChange={(e) => {
                form.setFieldValue("house_subcategory", e.target.value);
                setSubCategory(e.target.value);
              }}
              disabled={propertyType !== "House Property"}
              value={form.values.house_category}
              error={
                !!form.errors.house_category && form.touched.house_category
              }
              errorText={
                form.touched.house_category
                  ? form.errors.house_category
                  : undefined
              }
              onFocus={onInputFocus("house_category")}
            />
            <Select
              name="land_category"
              id="land_category"
              round
              fullWidth
              label="LAND CATEGORIES"
              options={LandCategories}
              onChange={(e) => {}}
              disabled={propertyType !== "Land Property"}
              // value={form.values.rate}
              // error={!!form.errors.rate && form.touched.rate}
              // errorText={form.touched.rate ? form.errors.rate : undefined}
              // onFocus={onInputFocus("rate")}
            />
          </div>
          <div className="header">
            <h6>Basic Info</h6>
          </div>
          <div className="basic-info">
            <Input
              name="name"
              id="name"
              round
              fullWidth
              placeholder="Property Name"
              onChange={(e) => {
                form.setFieldValue("name", e.target.value);
              }}
              value={form.values.name}
              error={!!form.errors.name && form.touched.name}
              errorText={form.touched.name ? form.errors.name : undefined}
              onFocus={onInputFocus("name")}
            />
            <Input
              name="location"
              id="location"
              round
              fullWidth
              placeholder="Property Location"
              onChange={(e) => {
                form.setFieldValue("location", e.target.value);
              }}
              value={form.values.location}
              error={!!form.errors.location && form.touched.location}
              errorText={
                form.touched.location ? form.errors.location : undefined
              }
              onFocus={onInputFocus("location")}
            />
          </div>
          <div className="header">
            <h6>Property Information</h6>
          </div>
          <div className="basic-info">
            <Radio
              id="1"
              value="rent"
              label="For Rent"
              name="transaction"
              onChange={(e) => {
                form.setFieldValue("transaction", e.target.value);
              }}
              error={!!form.errors.transaction && form.touched.transaction}
              errorText={
                form.touched.transaction ? form.errors.transaction : undefined
              }
              onFocus={onInputFocus("transaction")}
            />
            <Radio
              id="2"
              value="sale"
              label="For Sale"
              name="transaction"
              onChange={(e) => {
                form.setFieldValue("transaction", e.target.value);
              }}
              error={!!form.errors.transaction && form.touched.transaction}
              errorText={
                form.touched.transaction ? form.errors.transaction : undefined
              }
              onFocus={onInputFocus("transaction")}
            />
          </div>
          <CheckBox
            label="Allow Reservations ?"
            name="is_reserved"
            onChange={(e) => {
              form.setFieldValue("is_reserved", e.target.checked);
            }}
            value={form.values.is_reserved}
            error={!!form.errors.is_reserved && form.touched.is_reserved}
            errorText={
              form.touched.is_reserved ? form.errors.is_reserved : undefined
            }
            onFocus={onInputFocus("is_reserved")}
          />
          <div className="basic-info">
            <Input
              name="price"
              id="price"
              round
              fullWidth
              placeholder="Property Price"
              onChange={(e) => {
                form.setFieldValue("price", e.target.value);
              }}
              value={form.values.price}
              error={!!form.errors.price && form.touched.price}
              errorText={form.touched.price ? form.errors.price : undefined}
              onFocus={onInputFocus("price")}
            />
            <Input
              name="year_built"
              id="year_built"
              round
              fullWidth
              placeholder="Year Built"
              onChange={(e) => {
                form.setFieldValue("year_built", e.target.value);
              }}
              value={form.values.year_built}
              error={!!form.errors.year_built && form.touched.year_built}
              errorText={
                form.touched.year_built ? form.errors.year_built : undefined
              }
              onFocus={onInputFocus("year_built")}
            />
            <Select
              name="payment_type"
              id="payment_type"
              round
              fullWidth
              label="PAYMENT TYPE"
              options={PaymentTypes}
              onChange={(e) => {
                form.setFieldValue("payment_type", e.target.value);
              }}
              value={form.values.payment_type}
              error={!!form.errors.payment_type && form.touched.payment_type}
              errorText={
                form.touched.payment_type ? form.errors.payment_type : undefined
              }
              onFocus={onInputFocus("payment_type")}
            />
          </div>
          <div className="basic-info">
            <Input
              name="car_park"
              id="car_park"
              round
              fullWidth
              placeholder="Number of Car Parks"
              onChange={(e) => {
                form.setFieldValue("car_park", e.target.value);
              }}
              value={form.values.car_park}
              error={!!form.errors.car_park && form.touched.car_park}
              errorText={
                form.touched.car_park ? form.errors.car_park : undefined
              }
              onFocus={onInputFocus("car_park")}
            />
            <Input
              name="bathrooms"
              id="bathrooms"
              round
              fullWidth
              placeholder="Number of Bathrooms"
              onChange={(e) => {
                form.setFieldValue("bathrooms", e.target.value);
              }}
              value={form.values.bathrooms}
              error={!!form.errors.bathrooms && form.touched.bathrooms}
              errorText={
                form.touched.bathrooms ? form.errors.bathrooms : undefined
              }
              onFocus={onInputFocus("bathrooms")}
            />
            <Input
              name="rooms"
              id="rooms"
              round
              fullWidth
              placeholder="Number of Rooms"
              onChange={(e) => {
                form.setFieldValue("rooms", e.target.value);
              }}
              value={form.values.rooms}
              error={!!form.errors.rooms && form.touched.rooms}
              errorText={form.touched.rooms ? form.errors.rooms : undefined}
              onFocus={onInputFocus("rooms")}
            />
          </div>
          <div className="basic-info">
            <Select
              name="state"
              id="state"
              round
              fullWidth
              label="STATE"
              options={States}
              onChange={(e) => {
                setState(e.target.value);
                form.setFieldValue("state", e.target.value);
              }}
              value={form.values.state}
              error={!!form.errors.state && form.touched.state}
              errorText={form.touched.state ? form.errors.state : undefined}
              onFocus={onInputFocus("state")}
            />
            <Select
              name="lga"
              id="lga"
              round
              fullWidth
              options={lga}
              label="LOCAL GOVERNMENT AREA"
              onChange={(e) => {
                form.setFieldValue("lga", e.target.value);
              }}
              value={form.values.lga}
              error={!!form.errors.lga && form.touched.lga}
              errorText={form.touched.lga ? form.errors.lga : undefined}
              onFocus={onInputFocus("lga")}
              disabled={!lga}
            />
          </div>
          <div className="basic-info">
            <TextArea
              name="status"
              id="status"
              fullWidth
              noResize
              description
              placeholder="Property Status"
              onChange={(e) => {
                form.setFieldValue("status", e.target.value);
              }}
              value={form.values.status}
              error={!!form.errors.status && form.touched.status}
              errorText={form.touched.status ? form.errors.status : undefined}
              onFocus={onInputFocus("status")}
            />
            <TextArea
              name="overview"
              id="overview"
              fullWidth
              noResize
              description
              placeholder="Property Overview"
              onChange={(e) => {
                form.setFieldValue("overview", e.target.value);
              }}
              value={form.values.overview}
              error={!!form.errors.overview && form.touched.overview}
              errorText={
                form.touched.overview ? form.errors.overview : undefined
              }
              onFocus={onInputFocus("overview")}
            />
          </div>
          <div className="ammenities">
            {Ammenities.map((item, index) => (
              <CheckBox
                key={index}
                label={item}
                name={item}
                onClick={(e) => {
                  setAmmenities(ammenities.concat(e.target.value));
                }}
                value={item}
                error={!!form.errors.amenities && form.touched.amenities}
                errorText={
                  form.touched.amenities ? form.errors.amenities : undefined
                }
                onFocus={onInputFocus("amenities")}
              />
            ))}
          </div>
          <div className="header">
            <h6>Video Upload</h6>
          </div>
          <VideoPicker
            onChange={(value) => {
              form.setFieldValue("video_url", value);
            }}
          />

          <div className="header">
            <h6>Images Upload</h6>
          </div>
          <ImagesUploader
            onChange={(values) => {
              console.log(values);
              form.setFieldValue("image_file", values);
            }}
          />
          <Button type="submit" loading={actionLoading}>
            Submit
          </Button>
        </form>
      </AddPropertyContainer>
    </Content>
  );
};

export default Properties;

const Ammenities = [
  "Swimming Pool",
  "Terrace",
  "Air Conditioning",
  "Internet",
  "Balcony",
  "Cable TV",
  "Computer",
  "DishWasher",
  "Near Church",
  "Near Estate",
];

const PaymentTypes = [{ name: "save for property" }, { name: "outright" }];
