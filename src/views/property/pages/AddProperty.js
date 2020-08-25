import React, { useState, useEffect, useCallback } from "react";
import Content from "../../styles/Content";
import { AddPropertyContainer } from "./styles";
import Input from "components/Input";
import TextArea from "components/TextArea";
import Radio from "components/Radio";
import Select from "components/Select";
import CheckBox from "components/CheckBox";
import ImagesUploader from "components/ImageUploader";
import Button from "components/Button";
import LandCategories from "data/landCategories.json";
import VideoPicker from "components/VideoPicker";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createHouse, createLand } from "store/property/actions";
import { getHouseCategories } from "store/categories/actions";
import { toastSuccess } from "utils/Toast";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
import { getCity, getState } from "utils/Helpers";
import { useHistory } from "react-router-dom";

const Properties = () => {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [addressArray, setAddressArray] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [ammenities, setAmmenities] = useState([]);
  const [houseCategories, setHouseCategories] = useState([]);
  const [propertyType, setPropertyType] = useState();
  const { actionLoading } = useSelector((state) => state.properties);
  const categories = useSelector((state) => state.categories.data);
  const dispatch = useDispatch();
  const [location, setLocation] = useState();
  const [latlng, setLatLng] = useState();
  const [images, setImages] = useState([]);

  let history = useHistory();

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
  Geocode.setRegion("ng");
  Geocode.enableDebug();

  useEffect(() => {
    if (addressArray) {
      let city = getCity(addressArray);
      let state = getState(addressArray);
      setState(state);
      setCity(city);
    }
  }, [addressArray]);

  useEffect(() => {
    Geocode.fromAddress(location).then(
      (response) => {
        const geoCode = response.results[0].geometry.location;
        const addressArray = response.results[0].address_components;
        setAddressArray(addressArray);
        setLatLng(geoCode);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [location]);

  useEffect(() => {
    let newArr = [];
    categories &&
      categories.house_categories.map((item) => {
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
    const select = document.getElementsByName("house_subcategory")[0];
    const optgroups = select.getElementsByTagName("option");
    for (var i = 0; i < optgroups.length; i++) {
      if (
        optgroups[i]?.getAttribute("value")?.toString() ===
        subCategory
      ) {
        var maincategory = optgroups[i].parentElement.getAttribute(
          "label"
        );
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
      errors.price = "Property price is required";
    }
    if (!values.contact) {
      errors.contact = "Owners contact is required";
    }
    if (!values.transaction) {
      errors.transaction = "Property transaction is required";
    }
    if (propertyType === "House Property" && !values.status) {
      errors.status = "Property Status is required";
    }
    if (propertyType === "House Property" && !values.overview) {
      errors.overview = "Property overview is required";
    }
    if (propertyType !== "House Property" && !values.topography) {
      errors.topography = "Land topography is required";
    }
    return errors;
  };

  const form = useFormik({
    initialValues: {
      name: "",
      house_category: "",
      house_subcategory: "",
      land_category: "",
      topography: "",
      location: "",
      lga: "",
      state: "",
      is_reserved: "",
      installment: "",
      price: "",
      status: "",
      year_built: "",
      image_file: "",
      overview: "",
      lat: "",
      lng: "",
      contact: "",
      dimension: "",
      home_area: "",
      material: "",
      reference: "",
      amenities: "",
      transaction: "",
      video_url: "",
      car_park: "",
      bathrooms: "",
      rooms: "",
    },
    onSubmit: (values) => {
      if (propertyType === "House Property") {
        values.amenities = ammenities;
        values.house_category = category;
        delete values.land_category;
        delete values.topography;
        delete values.dimension;
      }
      if (propertyType !== "House Property") {
        delete values.house_subcategory;
        delete values.is_reserved;
        delete values.material;
        delete values.amenities;
        delete values.bathrooms;
        delete values.rooms;
        delete values.car_park;
        delete values.home_area;
        delete values.overview;
        delete values.year_built;
        delete values.reference;
        delete values.status;
        delete values.house_category;
        delete values.transaction;
      }
      values.lng = latlng.lng;
      values.lat = latlng.lat;
      values.state = state;
      values.lga = city;
      propertyType === "House Property"
        ? dispatch(createHouse(values)).then((res) => {
            if (res) {
              toastSuccess("Property Created Successfully");
              history.push("/admin/properties");
            }
          })
        : dispatch(createLand(values)).then((res) => {
            if (res) {
              history.push("/admin/properties");
              toastSuccess("Property Created Successfully");
            }
          });
    },
    validate,
    validateOnChange: true,
  });
  const onInputFocus = (name) => () =>
    form.setFieldError(name, undefined);

  const onChange = useCallback((values) => {
    setImages(values);
  }, []);

  useEffect(() => {
    form.setFieldValue("image_file", images);
  }, [images]);

  return (
    <Content>
      <Content.TitleHeader>
        <div
          style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}
        >
          <Content.Back to="/admin/properties">
            &larr; Back
          </Content.Back>
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
                form.setFieldValue(
                  "house_subcategory",
                  e.target.value
                );
                setSubCategory(e.target.value);
              }}
              disabled={propertyType !== "House Property"}
              value={form.values.house_subcategory}
              error={
                !!form.errors.house_subcategory &&
                form.touched.house_subcategory
              }
              errorText={
                form.touched.house_subcategory
                  ? form.errors.house_subcategory
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
              onChange={(e) => {
                form.setFieldValue("land_category", e.target.value);
              }}
              disabled={propertyType !== "Land Property"}
              value={form.values.land_category}
              error={
                !!form.errors.land_category &&
                form.touched.land_category
              }
              errorText={
                form.touched.land_category
                  ? form.errors.land_category
                  : undefined
              }
              onFocus={onInputFocus("land_category")}
            />
          </div>
          <div className="header">
            <h6>Property Information</h6>
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
              errorText={
                form.touched.name ? form.errors.name : undefined
              }
              onFocus={onInputFocus("name")}
            />
          </div>
          <div className="basic-info">
            <Radio
              id="1"
              value="rent"
              label="For Rent"
              name="transaction"
              disabled={propertyType !== "House Property"}
              onChange={(e) => {
                form.setFieldValue("transaction", e.target.value);
              }}
              error={
                !!form.errors.transaction && form.touched.transaction
              }
              errorText={
                form.touched.transaction
                  ? form.errors.transaction
                  : undefined
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
              error={
                !!form.errors.transaction && form.touched.transaction
              }
              errorText={
                form.touched.transaction
                  ? form.errors.transaction
                  : undefined
              }
              onFocus={onInputFocus("transaction")}
            />
          </div>
          <div
            className="basic-info"
            style={{ justifyContent: "space-between" }}
          >
            <CheckBox
              label="Allow Reservations ?"
              name="is_reserved"
              onChange={(e) => {
                form.setFieldValue("is_reserved", e.target.checked);
              }}
              value={form.values.is_reserved}
              error={
                !!form.errors.is_reserved && form.touched.is_reserved
              }
              errorText={
                form.touched.is_reserved
                  ? form.errors.is_reserved
                  : undefined
              }
              onFocus={onInputFocus("is_reserved")}
            />

            <CheckBox
              label="Allow Installment Payment ?"
              name="installment"
              onChange={(e) => {
                form.setFieldValue("installment", e.target.checked);
              }}
              value={form.values.installment}
              error={
                !!form.errors.installment && form.touched.installment
              }
              errorText={
                form.touched.installment
                  ? form.errors.installment
                  : undefined
              }
              onFocus={onInputFocus("installment")}
            />
          </div>
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
              errorText={
                form.touched.price ? form.errors.price : undefined
              }
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
              error={
                !!form.errors.year_built && form.touched.year_built
              }
              errorText={
                form.touched.year_built
                  ? form.errors.year_built
                  : undefined
              }
              onFocus={onInputFocus("year_built")}
              disabled={propertyType !== "House Property"}
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
                form.touched.car_park
                  ? form.errors.car_park
                  : undefined
              }
              onFocus={onInputFocus("car_park")}
              disabled={propertyType !== "House Property"}
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
              error={
                !!form.errors.bathrooms && form.touched.bathrooms
              }
              errorText={
                form.touched.bathrooms
                  ? form.errors.bathrooms
                  : undefined
              }
              onFocus={onInputFocus("bathrooms")}
              disabled={propertyType !== "House Property"}
            />
            <Input
              name={
                propertyType !== "Land Property"
                  ? "rooms"
                  : "topography"
              }
              id={
                propertyType !== "Land Property"
                  ? "rooms"
                  : "topography"
              }
              round
              fullWidth
              placeholder={
                propertyType !== "Land Property"
                  ? "Number of rooms"
                  : "Land Topography"
              }
              onChange={(e) => {
                propertyType !== "Land Property"
                  ? form.setFieldValue("rooms", e.target.value)
                  : form.setFieldValue("topography", e.target.value);
              }}
              value={
                propertyType !== "Land Property"
                  ? form.values.rooms
                  : form.values.topography
              }
              error={
                propertyType !== "Land Property"
                  ? !!form.errors.rooms && form.touched.rooms
                  : !!form.errors.topography &&
                    form.touched.topography
              }
              errorText={
                propertyType !== "Land Property"
                  ? form.touched.rooms
                    ? form.errors.rooms
                    : undefined
                  : form.touched.topography
                  ? form.errors.topography
                  : undefined
              }
              onFocus={
                propertyType !== "Land Property"
                  ? onInputFocus("rooms")
                  : onInputFocus("topography")
              }
            />
          </div>
          <div className="basic-info">
            <Input
              name="dimension"
              id="dimension"
              round
              fullWidth
              placeholder={
                propertyType !== "House Property"
                  ? "Land Dimension"
                  : "House Dimension"
              }
              onChange={(e) => {
                form.setFieldValue("dimension", e.target.value);
              }}
              value={form.values.dimension}
              error={
                !!form.errors.dimension && form.touched.dimension
              }
              errorText={
                form.touched.dimension
                  ? form.errors.dimension
                  : undefined
              }
              onFocus={onInputFocus("dimension")}
            />
            <Input
              name="home_area"
              id="home_area"
              round
              fullWidth
              placeholder="House Area"
              onChange={(e) => {
                form.setFieldValue("home_area", e.target.value);
              }}
              value={form.values.home_area}
              error={
                !!form.errors.home_area && form.touched.home_area
              }
              errorText={
                form.touched.home_area
                  ? form.errors.home_area
                  : undefined
              }
              onFocus={onInputFocus("home_area")}
              disabled={propertyType !== "House Property"}
            />
            <Input
              name="material"
              id="material"
              round
              fullWidth
              placeholder="Material used in building"
              onChange={(e) => {
                form.setFieldValue("material", e.target.value);
              }}
              value={form.values.material}
              error={!!form.errors.material && form.touched.material}
              errorText={
                form.touched.material
                  ? form.errors.material
                  : undefined
              }
              onFocus={onInputFocus("material")}
              disabled={propertyType !== "House Property"}
            />
          </div>
          <div className="basic-info">
            <Autocomplete
              name="location"
              id="location"
              placeholder="Property Location"
              style={{
                width: "100%",
                fontFamily: "GT Walsheim",
                fontWeight: "400",
                background: "#ffffff",
                border: "1px solid #dddddd",
                boxSizing: "border-box",
                padding: "16px",
                maxWidth: "400px",
                fontSize: "14px",
                borderRadius: "30px",
              }}
              onBlur={(e) => {
                form.setFieldValue("location", e.target.value);
                setLocation(e.target.value);
              }}
              onPlaceSelected={(place) => {
                setLocation(place.formatted_address);
                form.setFieldValue(
                  "location",
                  place.formatted_address
                );
              }}
              types={["geocode"]}
              componentRestrictions={{ country: "ng" }}
            />
          </div>
          <div className="basic-info">
            <Input
              name="state"
              id="state"
              round
              fullWidth
              placeholder="State"
              value={form.values.state || state}
              error={!!form.errors.state && form.touched.state}
              errorText={
                form.touched.state ? form.errors.state : undefined
              }
              onFocus={onInputFocus("state")}
              disabled
            />
            <Input
              name="lga"
              id="lga"
              round
              fullWidth
              placeholder="lga"
              value={form.values.lga || city}
              error={!!form.errors.lga && form.touched.lga}
              errorText={
                form.touched.lga ? form.errors.lga : undefined
              }
              onFocus={onInputFocus("lga")}
              disabled
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
              errorText={
                form.touched.status ? form.errors.status : undefined
              }
              onFocus={onInputFocus("status")}
              disabled={propertyType !== "House Property"}
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
                form.touched.overview
                  ? form.errors.overview
                  : undefined
              }
              onFocus={onInputFocus("overview")}
              disabled={propertyType !== "House Property"}
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
                error={
                  !!form.errors.amenities && form.touched.amenities
                }
                errorText={
                  form.touched.amenities
                    ? form.errors.amenities
                    : undefined
                }
                onFocus={onInputFocus("amenities")}
                disabled={propertyType !== "House Property"}
              />
            ))}
          </div>
          <VideoPicker
            onChange={(value) => {
              form.setFieldValue("video_url", value);
            }}
          />
          <ImagesUploader onChange={onChange} />
          <div className="header">
            <h6>contact info</h6>
          </div>
          <div className="basic-info">
            <Input
              name="contact"
              id="contact"
              round
              fullWidth
              placeholder="Owners Contact"
              onChange={(e) => {
                form.setFieldValue("contact", e.target.value);
              }}
              value={form.values.contact}
              error={!!form.errors.contact && form.touched.contact}
              errorText={
                form.touched.contact ? form.errors.contact : undefined
              }
              onFocus={onInputFocus("contact")}
            />
            <Input
              name="reference"
              id="reference"
              round
              fullWidth
              placeholder="Reference"
              onChange={(e) => {
                form.setFieldValue("reference", e.target.value);
              }}
              value={form.values.reference}
              error={
                !!form.errors.reference && form.touched.reference
              }
              errorText={
                form.touched.reference
                  ? form.errors.reference
                  : undefined
              }
              onFocus={onInputFocus("reference")}
              disabled={propertyType !== "House Property"}
            />
          </div>
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
  "DishWasher",
  "Washing Machine",
  "Solar",
];

// const PaymentTypes = [
//   { name: "save for property" },
//   { name: "outright" },
// ];
