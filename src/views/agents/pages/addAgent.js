import React from "react";
import Content from "views/styles/Content";
import { Card, CardBody } from "reactstrap";
import Input from "components/Input";
import { AddAgentContainer } from "./styles";
import Button from "components/Button";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createAgent } from "store/agent/actions";
import { toastSuccess } from "utils/Toast";
import { useHistory } from "react-router-dom";

export default () => {
  const { actionLoading } = useSelector((state) => state.agent);
  const dispatch = useDispatch();
  const history = useHistory();
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Property name is required";
    }
    if (!values.email) {
      errors.email = "Email field is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.password_confirmation) {
      errors.password_confirmation = "Password mismatch";
    }
    if (!values.dob) {
      errors.dob = "Date of Birth is required";
    }
    if (!values.phone) {
      errors.phone = "Phone Number is required";
    }
    if (values.password !== values.password_confirmation) {
      errors.password_confirmation = "Password mismatch";
    }

    return errors;
  };
  const form = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      dob: "",
      phone: "",
    },
    onSubmit: (values) => {
      dispatch(createAgent(values)).then((res) => {
        if (res) {
          toastSuccess(`Agent ${values.name} was created successfully`);
          history.push({
            pathname: "/admin/agent",
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
          <Content.Back to="/admin/agent">&larr; Back</Content.Back>
          <Content.Title>Add Agent</Content.Title>
        </div>
      </Content.TitleHeader>
      <AddAgentContainer>
        <Card>
          <CardBody>
            <form autoComplete="off" onSubmit={form.handleSubmit}>
              <div className="header">
                <h6>Agent Info</h6>
              </div>
              <div className="basic-info">
                <Input
                  name="name"
                  id="name"
                  round
                  fullWidth
                  placeholder="Full Name"
                  onChange={(e) => {
                    form.setFieldValue("name", e.target.value);
                  }}
                  value={form.values.name}
                  error={!!form.errors.name && form.touched.name}
                  errorText={form.touched.name ? form.errors.name : undefined}
                  onFocus={onInputFocus("name")}
                />
                <Input
                  name="email"
                  id="email"
                  round
                  fullWidth
                  placeholder="Email"
                  onChange={(e) => {
                    form.setFieldValue("email", e.target.value);
                  }}
                  value={form.values.email}
                  error={!!form.errors.email && form.touched.email}
                  errorText={form.touched.email ? form.errors.email : undefined}
                  onFocus={onInputFocus("email")}
                />
              </div>
              <div className="basic-info">
                <Input
                  name="phone"
                  id="phone"
                  round
                  fullWidth
                  placeholder="Phone Number"
                  onChange={(e) => {
                    form.setFieldValue("phone", e.target.value);
                  }}
                  value={form.values.phone}
                  error={!!form.errors.phone && form.touched.phone}
                  errorText={form.touched.phone ? form.errors.phone : undefined}
                  onFocus={onInputFocus("phone")}
                />
                <Input
                  name="dob"
                  id="dob"
                  round
                  fullWidth
                  placeholder="Date of birth"
                  onChange={(e) => {
                    form.setFieldValue("dob", e.target.value);
                  }}
                  value={form.values.dob}
                  error={!!form.errors.dob && form.touched.dob}
                  errorText={form.touched.dob ? form.errors.dob : undefined}
                  onFocus={onInputFocus("dob")}
                />
              </div>
              <div className="header">
                <h6>Security Info</h6>
              </div>
              <div className="basic-info">
                <Input
                  name="password"
                  id="password"
                  round
                  fullWidth
                  placeholder="Password"
                  passwordToggle
                  onChange={(e) => {
                    form.setFieldValue("password", e.target.value);
                  }}
                  value={form.values.password}
                  error={!!form.errors.password && form.touched.password}
                  errorText={
                    form.touched.password ? form.errors.password : undefined
                  }
                  onFocus={onInputFocus("password")}
                />
                <Input
                  name="password_confirmation"
                  id="password_confirmation"
                  round
                  fullWidth
                  placeholder="Password"
                  passwordToggle
                  onChange={(e) => {
                    form.setFieldValue("password_confirmation", e.target.value);
                  }}
                  value={form.values.password_confirmation}
                  error={
                    !!form.errors.password_confirmation &&
                    form.touched.password_confirmation
                  }
                  errorText={
                    form.touched.password_confirmation
                      ? form.errors.password_confirmation
                      : undefined
                  }
                  onFocus={onInputFocus("password_confirmation")}
                />
              </div>
              <Button type="submit" loading={actionLoading}>
                Submit
              </Button>
            </form>
          </CardBody>
        </Card>
      </AddAgentContainer>
    </Content>
  );
};
