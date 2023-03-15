import styled from "styled-components";
import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import { ButtonExample } from "../atoms/ButtonA";

export const PageContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #dfdfdf;
`;

export const NotificationWrapper = styled(animated.div)`
  background: #dfdfdf;
  padding: 1rem;
  min-width: 15rem;
  border-radius: 8px;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.2),
    -2px -5px 8px rgba(255, 255, 255, 0.883);
  font-size: 0.8rem;
  position: fixed;
  bottom: 10vh;
  right: 5vw;
  max-width: 25rem;
  border: 1px solid rgba(255, 255, 255, 0.472);
`;

export const NotificationTitle = styled.h3`
  margin: 0;
  font-size: 1.25em;
`;

export const NotificationContent = styled.p`
  margin: 0;
  font-size: 1em;
`;

export const NotificationFooter = styled.footer`
  display: flex;
  align-items: center;
  padding-top: 0.5rem;
  flex-direction: row-reverse;
`;


const Alert = (title: string, content: string, ) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (!active) return;
    const timeoutId = setTimeout(() => {
      setActive(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [active]);

  const props = useSpring({
    transform: active ? "scale(1)" : "scale(0)",
    opacity: active ? 1 : 0,
  });

  const handleClose = () => {
    setActive(false);
  };

  return (
    <PageContent>
      <NotificationWrapper style={props}>
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationContent>{content}</NotificationContent>
        <NotificationFooter>
          <ButtonExample onClick={handleClose}>Ok</ButtonExample>
        </NotificationFooter>
      </NotificationWrapper>
    </PageContent>
  );
};

export default Alert
