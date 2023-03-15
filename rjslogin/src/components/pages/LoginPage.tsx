/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import LoginButtons from "../molecules/LoginButtons";
import TextInputsLogin from "../organisms/TextInputsLogin";
import { useAppDispatch, useAppSelector } from "../../hooks/loginHooks";
import { AuthContext } from "../../context/AuthContext";
import {
  selectErrorMessage,
  selectEmail,
  selectPassword,
  selectStatus,
  removeMessageError,
} from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styles/GlobalStyles";

const LoginPage = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const errorMessage = useAppSelector(selectErrorMessage);
  const correo = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

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
      dispatch(removeMessageError());
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
