/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import { useNavigate } from "react-router-dom";
import { TextTitle } from "../atoms/TextTitle";
import Loader from "../atoms/Loader";
import { AuthContext } from "../../context/AuthContext";
import { useAppSelector } from "../../hooks/loginHooks";
import { selectStatus } from "../../redux/slices/authSlice";
import { ButtonExample, ButtonText } from "../atoms/ButtonA";
import { useContext, useEffect } from "react";
import { Container } from "../../styles/GlobalStyles";
import Navbar from "../atoms/Navbar";

const HomePage = () => {
  const { logOut } = useContext(AuthContext);
  const status = useAppSelector(selectStatus);
  const navigate = useNavigate();

  const exitPage = () => {
    logOut();

    return status === "authenticated" ? <Loader /> : <></>;
  };

  useEffect(() => {
    if (status !== "authenticated") {
      navigate("/login");
    }
  }, [status]);

  return (
    <Container>
      <div>
        <Navbar />
        <TextTitle>Welcome to HomePage</TextTitle>
        <ButtonExample onClick={exitPage}>
          <ButtonText>Exit</ButtonText>
        </ButtonExample>
      </div>
    </Container>
  );
};

export default HomePage;
