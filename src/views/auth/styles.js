import styled from "styled-components";

const Login = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #f1f1ef;
  .img {
    width: 50%;
    .image {
      width: 100%;
      height: 325px;
    }
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;
Login.Form = styled.div`
  display: flex;
  flex-direction: column;
  color: #a0a0a0;
  margin: auto;
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
  .button {
    width: 400px !important;
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

export default Login;
