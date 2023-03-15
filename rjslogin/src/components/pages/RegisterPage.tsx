/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useAppDispatch, useAppSelector } from "../../hooks/loginHooks";
import {
  selectErrorMessage,
  selectName,
  selectEmail,
  selectPassword,
  removeMessageError,
} from "../../redux/slices/authSlice";

import TextInputsRegister from "../organisms/TextInputsRegister";
import RegisterButtons from "../molecules/RegisterButtons";

import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { signUp } = useContext(AuthContext);
  const errorMessage = useAppSelector(selectErrorMessage);
  const nombre = useAppSelector(selectName);
  const correo = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const dispatch = useAppDispatch();

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
      dispatch(removeMessageError());
      alert("" + errorMessage);
      return;
    }
    dispatch(removeMessageError());
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
