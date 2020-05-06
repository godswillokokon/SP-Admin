import React from "react";
import styled from "styled-components";
import image from "../assets/img/login.svg";
const LoginBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f1f1ef;
  .img {
    width: 50%;
    img {
      width: 100%;
      height: 325px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;
const LoginForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 10rem;
  color: #a0a0a0;

  h2 {
    font-size: 20px;
    margin: 0;
  }
  h1 {
    font-size: 30px;
  }
  h3 {
    font-size: 14px;
    margin-top: 2rem;
  }
  input {
    color: #a0a0a0;
    height: 48px;
    width: 70%;
    border: aliceblue;
    padding: 1rem;
    margin: 6px 0;
    border-radius: 5px;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    @media screen and (max-width: 1255px) {
      width: 100%;
    }
  }
  button {
    width: 70%;
    height: 48px;
    border: none;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    background: #0daba8;
    border-radius: 5px;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
    @media screen and (max-width: 1255px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin: 0 2rem;
  }

  @media screen and (max-width: 1255px) {
    margin: 0 5rem;
  }
`;

export default function () {
  return (
    <LoginBody>
      <LoginForm>
        <h2>Welcome Back</h2>
        <h1>Login to your Account</h1>
        <input type="text" />
        <input type="text" />
        <h3>Forgot password?</h3>
        <button>Login</button>
      </LoginForm>
      <div className="img">
        <img src={image} alt="" />
      </div>
    </LoginBody>
  );
}
