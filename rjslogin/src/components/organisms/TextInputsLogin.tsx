import React, { useState } from "react";
import TextInputA from "../atoms/TextInputA";
import { TextA } from "../atoms/TextA";
import { TextTitle } from "../atoms/TextTitle";
import validationInput from "../../helper/validationInput";
import { TextErrorLabel } from "../atoms/TextErrorLabel";
import { setEmail, setPassword } from "../../redux/slices/authSlice";
import { LoginContext } from "../../context/login/AuthContext";

const TextInputsLogin = () => {
  const { dispatch } = LoginContext();
  const [focus, setFocus] = useState(false);
  const [focusContrasena, setFocusContrasena] = useState(false);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const dispatchFunction = dispatch === undefined ? () => "" : dispatch;

  const changeFocus = () => {
    setFocus(true);
  };

  const changeFocusContrasena = () => {
    setFocusContrasena(true);
  };

  const OnChangePassword = (value: React.SetStateAction<string>) => {
    setContrasena(value.toString());
    dispatchFunction(setPassword({ password: value.toString() }));
  };
  const OnChangeEmail = (value: React.SetStateAction<string>) => {
    setCorreo(value.toString());
    dispatchFunction(setEmail({ email: value.toString() }));
  };

  return (
    <>
      <TextTitle>Login</TextTitle>
      <TextA>Email: </TextA>
      <TextInputA
        name="login-email"
        type="email"
        value={correo}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          OnChangeEmail(e.target.value);
        }}
        placeholder="Input email"
        onFocus={changeFocus}
      />
      {validationInput(correo) && focus ? (
        <TextErrorLabel>fiel empty or lenght less than 6</TextErrorLabel>
      ) : (
        <></>
      )}
      <TextA>Password: </TextA>
      <TextInputA
        name="password-login"
        type="password"
        value={contrasena}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) => {
          OnChangePassword(e.target.value);
        }}
        placeholder="Input password"
        onFocus={changeFocusContrasena}
      />
      {validationInput(contrasena) && focusContrasena ? (
        <TextErrorLabel>fiel empty or lenght less than 6</TextErrorLabel>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextInputsLogin;
