import React, { useCallback, useState, useEffect } from "react";
import Content from "views/styles/Content";
import { Card, CardBody } from "reactstrap";
import Input from "components/Input";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "components/TextArea";
import { AddCareerContainer } from "./styles";
import ImagesUploader from "components/ImageUploader";
import Button from "components/Button";
import { useHistory } from "react-router-dom";
import { toastSuccess } from "utils/Toast";
import { createPromo } from "store/promotions/actions";
import Select from "components/Select";
import Geocode from "react-geocode";
import { getState } from "utils/Helpers";
import Autocomplete from "react-google-autocomplete";

export default () => {
  const { actionLoading } = useSelector((state) => state.promotions);
  const [images, setImages] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const [state, setState] = useState("");
  const [addressArray, setAddressArray] = useState();
  const [location, setLocation] = useState();

  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
  Geocode.setRegion("ng");
  Geocode.enableDebug();
  const propertyType = [
    { name: "ALL", key: "all" },
    { name: "LAND", key: "land" },
    { name: "HOUSE", key: "house" },
  ];
  useEffect(() => {
    if (addressArray) {
      let state = getState(addressArray);
      setState(state);
    }
  }, [addressArray]);

  useEffect(() => {
    Geocode.fromAddress(location).then(
      (response) => {
        const addressArray = response.results[0].address_components;
        setAddressArray(addressArray);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [location]);
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Property name is required";
    }
    if (!values.description) {
      errors.description = "description field is required";
    }
    if (!values.start_date) {
      errors.start_date = "Start Date field is required";
    }
    if (!values.end_date) {
      errors.end_date = "End Date field is required";
    }
    if (!values.discount) {
      errors.discount = "Discount field is required";
    }
    if (!values.property_type) {
      errors.property_type = "Please select properety type";
    }

    return errors;
  };

  const onChange = useCallback((values) => {
    let index = values.length - 1;
    setImages(values[index]);
  }, []);
  useEffect(() => {
    form.setFieldValue("image", images);
  }, [images]);
  const form = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
      start_date: "",
      end_date: "",
      property_type: "",
      discount: "",
      state: "",
      location: "",
    },
    onSubmit: (values) => {
      values.state = state;
      dispatch(createPromo(values)).then((res) => {
        if (res) {
          toastSuccess(`${values.name} was created successfully`);
          history.push({
            pathname: "/admin/promo",
          });
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
          <Content.Back to="/admin/career">&larr; Back</Content.Back>
          <Content.Title>Add Promotion</Content.Title>
        </div>
      </Content.TitleHeader>
      <AddCareerContainer>
        <Card>
          <CardBody>
            <form autocomplete="off" onSubmit={form.handleSubmit}>
              <div className="header">
                <h6>Promo Info</h6>
              </div>

              <div className="basic-info">
                <Input
                  name="name"
                  id="name"
                  label="Promo Title"
                  round
                  fullWidth
                  th
                  placeholder="Enter Promotion title"
                  onChange={(e) => {
                    form.setFieldValue("name", e.target.value);
                  }}
                  value={form.values.name}
                  error={!!form.errors.name && form.touched.name}
                  errorText={form.touched.name ? form.errors.name : undefined}
                  onFocus={onInputFocus("name")}
                />
                <Select
                  name="property-type"
                  id="property-type"
                  round
                  fullWidth
                  label="PROPERTY TYPE"
                  options={propertyType}
                  onChange={(e) => {
                    form.setFieldValue("property_type", e.target.value);
                  }}
                  value={form.values.property_type}
                  error={
                    !!form.errors.property_type && form.touched.property_type
                  }
                  errorText={
                    form.touched.property_type
                      ? form.errors.property_type
                      : undefined
                  }
                  onFocus={onInputFocus("property_type")}
                />
              </div>

              <div className="basic-info">
                <Autocomplete
                  name="locations"
                  id="locations"
                  fullWidth
                  autocomplete="off"
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
                  onChange={(e) => {
                    form.setFieldValue("location", e.target.value);
                    setLocation(e.target.value);
                  }}
                  onPlaceSelected={(place) => {
                    setLocation(place.formatted_address);
                    form.setFieldValue("location", place.formatted_address);
                  }}
                  types={["geocode"]}
                  componentRestrictions={{ country: "ng" }}
                />
                <Input
                  name="state"
                  id="state"
                  round
                  fullWidth
                  placeholder="State"
                  value={form.values.state || state}
                  error={!!form.errors.state && form.touched.state}
                  errorText={form.touched.state ? form.errors.state : undefined}
                  onFocus={onInputFocus("state")}
                  disabled
                />
              </div>
              <div className="basic-info">
                <Input
                  name="discount"
                  id="discount"
                  label="Discount"
                  type="number"
                  round
                  fullWidth
                  placeholder="Discount (%)"
                  onChange={(e) => {
                    form.setFieldValue("discount", e.target.value);
                  }}
                  value={form.values.discount}
                  error={!!form.errors.discount && form.touched.discount}
                  errorText={
                    form.touched.discount ? form.errors.discount : undefined
                  }
                  onFocus={onInputFocus("start_date")}
                />
              </div>
              <div className="basic-info">
                <>
                  <div className="header">
                    <h6>Start Date</h6>
                  </div>
                  <Input
                    name="start_date"
                    id="start_date"
                    label="Start Date"
                    type="date"
                    round
                    fullWidth
                    placeholder="Start Date"
                    onChange={(e) => {
                      form.setFieldValue("start_date", e.target.value);
                    }}
                    value={form.values.start_date}
                    error={!!form.errors.start_date && form.touched.start_date}
                    errorText={
                      form.touched.start_date
                        ? form.errors.start_date
                        : undefined
                    }
                    onFocus={onInputFocus("start_date")}
                  />
                </>
                <>
                  <div className="header">
                    <h6>End Date</h6>
                  </div>
                  <Input
                    name="end_date"
                    id="end_date"
                    label="End Date"
                    type="date"
                    round
                    fullWidth
                    placeholder="End Date"
                    onChange={(e) => {
                      form.setFieldValue("end_date", e.target.value);
                    }}
                    value={form.values.end_date}
                    error={!!form.errors.end_date && form.touched.end_date}
                    errorText={
                      form.touched.end_date ? form.errors.end_date : undefined
                    }
                    onFocus={onInputFocus("end_date")}
                  />
                </>
              </div>
              <div className="basic-info">
                <TextArea
                  name="description"
                  id="description"
                  type
                  fullWidth
                  noResize
                  description
                  placeholder="Description"
                  onChange={(e) => {
                    form.setFieldValue("description", e.target.value);
                  }}
                  value={form.values.description}
                  error={!!form.errors.description && form.touched.description}
                  errorText={
                    form.touched.description
                      ? form.errors.description
                      : undefined
                  }
                  onFocus={onInputFocus("description")}
                />
              </div>
              <div className="header">
                <h6>Images Upload</h6>
              </div>
              <ImagesUploader onChange={onChange} />
              <Button type="submit" loading={actionLoading}>
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </AddCareerContainer>
    </Content>
  );
};
