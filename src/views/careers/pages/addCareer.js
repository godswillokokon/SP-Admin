import React from "react";
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
import { createCareer } from "store/career/actions";

export default () => {
  const { actionLoading } = useSelector((state) => state.career);
  const [image, setImage] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const validate = (values) => {
    const errors = {};

    if (!values.career_name) {
      errors.career_name = "Property name is required";
    }
    if (!values.description) {
      errors.description = "description field is required";
    }

    return errors;
  };
  console.log(actionLoading);
  const form = useFormik({
    initialValues: {
      career_name: "",
      description: "",
      image: "",
    },
    onSubmit: (values) => {
      dispatch(createCareer(values)).then((res) => {
        if (res) {
          toastSuccess(
            `${values.career_name} was created successfully`
          );
          history.push({
            pathname: "/admin/career",
          });
        }
      });
    },
    validate,
    validateOnChange: true,
  });
  const onInputFocus = (name) => () =>
    form.setFieldError(name, undefined);

  const onChange = React.useCallback((values) => {
    setImage(values[0]);
  }, []);

  React.useEffect(() => {
    form.setFieldValue("image", image);
  }, [image]);
  return (
    <Content>
      <Content.TitleHeader>
        <div
          style={{ flex: "0 0 41.666667%", maxWidth: "41.666667%" }}
        >
          <Content.Back to="/admin/career">&larr; Back</Content.Back>
          <Content.Title>Add Career</Content.Title>
        </div>
      </Content.TitleHeader>
      <AddCareerContainer>
        <Card>
          <CardBody>
            <form autoComplete="off" onSubmit={form.handleSubmit}>
              <div className="header">
                <h6>Career Info</h6>
              </div>
              <div className="basic-info">
                <Input
                  name="career_name"
                  id="career_name"
                  round
                  fullWidth
                  placeholder="Enter Career title"
                  onChange={(e) => {
                    form.setFieldValue("career_name", e.target.value);
                  }}
                  value={form.values.career_name}
                  error={
                    !!form.errors.career_name &&
                    form.touched.career_name
                  }
                  errorText={
                    form.touched.career_name
                      ? form.errors.career_name
                      : undefined
                  }
                  onFocus={onInputFocus("career_name")}
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
                  error={
                    !!form.errors.description &&
                    form.touched.description
                  }
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
