/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useAppSelector } from "../../hooks/loginHooks";
import {
  selectErrorMessage,
  selectName,
  selectEmail,
  selectPassword,
} from "../../redux/slices/authSlice";

import TextInputsRegister from "../organisms/TextInputsRegister";
import RegisterButtons from "../molecules/RegisterButtons";

import { useNavigate } from "react-router-dom";
import Alert from "../molecules/Alert";
import { Container } from "../../styles/GlobalStyles";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);
  const errorMessage = useAppSelector(selectErrorMessage);
  const nombre = useAppSelector(selectName);
  const correo = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);

  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }

    if (errorMessage.includes("Registro Exitoso")) {
      Alert("", errorMessage);
      return;
    }
    Alert("Registro incorrecto", errorMessage);
  }, [errorMessage]);

  const onRegister = () => {
    signUp({
      nombre,
      correo,
      password,
    });
  };

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
