/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { LoginContext } from "../../context/login/AuthContext";
import TextInputsRegister from "../organisms/TextInputsRegister";
import RegisterButtons from "../molecules/RegisterButtons";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    signUp,
    removeError,
    nameSelector,
    errorMessageSelector,
    emailSelector,
    passwordSelector,
  } = LoginContext();
  let nombre = nameSelector === undefined ? "" : nameSelector;
  let errorMessage =
    errorMessageSelector === undefined ? "" : errorMessageSelector;
  let correo = emailSelector === undefined ? "" : emailSelector;
  let password = passwordSelector === undefined ? "" : passwordSelector;
  const onRegister = () => {
    signUp({
      nombre,
      correo,
      password,
    });
  };

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }
    if (errorMessage.includes("Registro Exitoso")) {
      removeError();
      alert("" + errorMessage);
      return;
    }
    removeError();
    alert("Registro incorrecto :" + errorMessage);
  }, [errorMessage]);

  return (
    <Container>
      <div>
        <TextInputsRegister />
        <RegisterButtons
          OnCreateAccount={onRegister}
          OnPressToLogin={() => navigate("/login")}
        />
      </div>
    </Container>
  );
};
