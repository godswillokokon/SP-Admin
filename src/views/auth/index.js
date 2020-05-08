import React, { useEffect } from "react";
import { ReactComponent as Image } from "assets/img/login.svg";
import Login from "./styles";
import Input from "components/Input";
import Button from "components/Button";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "store/auth/actions";

export default function () {
  const { loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(login(values)).then(() => {
      history.push({
        pathname: "/admin/dashboard",
      });
    });
  };

  const form = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validate,
    validateOnChange: false,
  });

  const onInputFocus = (name) => () => {
    form.setFieldError(name, undefined);
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <Login>
      <Login.Form>
        <h2>Welcome Back</h2>
        <h1>Login to your Account</h1>
        <form onSubmit={form.handleSubmit}>
          <Input
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
            label="email"
            value={form.values.email}
            onChange={form.handleChange}
            errorText={form.errors.email}
            onFocus={onInputFocus("email")}
          />
          <Input
            placeholder="Password"
            name="password"
            label="password"
            id="password"
            type="password"
            passwordToggle
            value={form.values.password}
            onChange={form.handleChange}
            errorText={form.errors.password}
            onFocus={onInputFocus("password")}
          />
          <h3>Forgot password?</h3>
          <Button className="button" type="submit" loading={loading}>
            Sign In
          </Button>
        </form>
      </Login.Form>
      <div className="img">
        <Image className="image" />
      </div>
    </Login>
  );
}
