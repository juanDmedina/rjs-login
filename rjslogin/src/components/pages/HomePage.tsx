/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import { useNavigate } from "react-router-dom";
import { TextTitle } from "../atoms/TextTitle";
import Loader from "../atoms/Loader";
import { LoginContext } from "../../context/login/AuthContext";
import { ButtonExample, ButtonText } from "../atoms/ButtonA";
import { useEffect } from "react";
import { Container } from "../../styles/GlobalStyles";
import { CenterView } from "../atoms/CenterView";

const HomePage = () => {
  const { logOut, statusSelector } = LoginContext();
  let status = statusSelector === undefined ? "error" : statusSelector;
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
        <TextTitle>Welcome to HomePage</TextTitle>
        <CenterView>
          <ButtonExample onClick={exitPage}>
            <ButtonText>Exit</ButtonText>
          </ButtonExample>
        </CenterView>
      </div>
    </Container>
  );
};

export default HomePage;
