import React, { useState } from "react";
import TextInputA from "../atoms/TextInputA";
import { TextA } from "../atoms/TextA";
import { TextTitle } from "../atoms/TextTitle";

import validationInput from "../../helper/validationInput";
import { TextErrorLabel } from "../atoms/TextErrorLabel";
import { useAppDispatch } from "../../hooks/loginHooks";
import { setEmail, setName, setPassword } from "../../redux/slices/authSlice";

const TextInputsRegister = () => {
  const [focusPassword, setFocusPassword] = useState(false);
  const [focusCorreo, setFocusCorreo] = useState(false);
  const [focusName, setFocusName] = useState(false);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [nombre, setNombre] = useState("");
  const dispatch = useAppDispatch();

  const changeFocusName = () => {
    setFocusName(true);
  };

  const changeFocusPassword = () => {
    setFocusPassword(true);
  };

  const changeFocusCorreo = () => {
    setFocusCorreo(true);
  };

  const OnChangeName = (value: React.SetStateAction<string>) => {
    setNombre(value.toString());
    dispatch(setName({ name: value.toString() }));
  };

  const OnChangePassword = (value: React.SetStateAction<string>) => {
    setContrasena(value.toString());
    dispatch(setPassword({ password: value.toString() }));
  };
  const OnChangeEmail = (value: React.SetStateAction<string>) => {
    setCorreo(value.toString());
    dispatch(setEmail({ email: value.toString() }));
  };
  return (
    <>
      <TextTitle>Register</TextTitle>
      <TextA>Name:</TextA>
      <TextInputA
        name="register-name"
        type="text"
        value={nombre}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          OnChangeName(e.target.value);
        }}
        placeholder="Input name"
        onFocus={changeFocusName}
      />
      {validationInput(nombre) && focusName ? (
        <TextErrorLabel>fiel empty or lenght less than 6</TextErrorLabel>
      ) : (
        <></>
      )}
      <TextA>Email: </TextA>
      <TextInputA
        name="register-email"
        type="email"
        value={correo}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          OnChangeEmail(e.target.value);
        }}
        placeholder="Input email"
        onFocus={changeFocusCorreo}
      />
      {validationInput(correo) && focusCorreo ? (
        <TextErrorLabel>fiel empty or lenght less than 6</TextErrorLabel>
      ) : (
        <></>
      )}
      <TextA>Password: </TextA>
      <TextInputA
        name="password-register"
        type="password"
        value={contrasena}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          OnChangePassword(e.target.value);
        }}
        placeholder="Input password"
        onFocus={changeFocusPassword}
      />
      {validationInput(contrasena) && focusPassword ? (
        <TextErrorLabel>fiel empty or lenght less than 6</TextErrorLabel>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextInputsRegister;
