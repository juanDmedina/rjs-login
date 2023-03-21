/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import LoginButtons from "../molecules/LoginButtons";
import TextInputsLogin from "../organisms/TextInputsLogin";
import { LoginContext } from "../../context/login/AuthContext";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    signIn,
    removeError,
    statusSelector,
    errorMessageSelector,
    emailSelector,
    passwordSelector,
  } = LoginContext();
  let errorMessage =
    errorMessageSelector === undefined ? "" : errorMessageSelector;
  let correo = emailSelector === undefined ? "" : emailSelector;
  let password = passwordSelector === undefined ? "" : passwordSelector;
  let status = statusSelector === undefined ? "error" : statusSelector;

  const handleLogin = () => {
    signIn({ correo, password });
  };

  useEffect(() => {
    if (status === "authenticated") {
      navigate("/home");
    }
  }, [status]);

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }

    if (errorMessage.includes("incorrecta")) {
      removeError();
      alert("Login incorrecto: " + errorMessage);
    }
  }, [errorMessage]);
  return (
    <Container>
      <div>
        <TextInputsLogin />
        <LoginButtons
          OnPressSingIn={handleLogin}
          OnPressRegister={() => navigate("/register")}
        />
      </div>
    </Container>
  );
};

export default LoginPage;
