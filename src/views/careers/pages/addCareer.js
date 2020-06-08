import React from "react";
import Content from "views/styles/Content";
import { Card, CardBody } from "reactstrap";
import Input from "components/Input";
import { useFormik } from "formik";
import TextArea from "components/TextArea";
import { AddCareerContainer } from "./styles";
import ImagesUploader from "components/ImageUploader";
import Button from "components/Button";

export default () => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Property name is required";
    }
    if (!values.description) {
      errors.description = "description field is required";
    }

    return errors;
  };

  const form = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      // dispatch(createAgent(values)).then((res) => {
      //   if (res) {
      //     toastSuccess(`Agent ${values.name} was created successfully`);
      //     history.push({
      //       pathname: "/admin/agent",
      //     });
      //   }
      // });
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
          <Content.Title>Add Career</Content.Title>
        </div>
      </Content.TitleHeader>
      <AddCareerContainer>
        <Card>
          <CardBody>
            <form>
              <div className="header">
                <h6>Career Info</h6>
              </div>
              <div className="basic-info">
                <Input
                  name="name"
                  id="name"
                  round
                  fullWidth
                  placeholder="Enter Career title"
                  onChange={(e) => {
                    form.setFieldValue("name", e.target.value);
                  }}
                  value={form.values.name}
                  error={!!form.errors.name && form.touched.name}
                  errorText={form.touched.name ? form.errors.name : undefined}
                  onFocus={onInputFocus("name")}
                />
              </div>
              <div className="basic-info">
                <TextArea
                  name="description"
                  id="description"
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
              <ImagesUploader
                onChange={(values) => {
                  console.log(values);
                  form.setFieldValue("image", values);
                }}
              />
              <Button type="submit">Submit</Button>
            </form>
          </CardBody>
        </Card>
      </AddCareerContainer>
    </Content>
  );
};
