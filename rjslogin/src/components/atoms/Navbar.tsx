import { useState, useEffect, useContext } from "react";
import {
  Nav,
  NavbarContainer,
  MenuItemBtn,
  MenuLinkBtn,
} from "../../styles/Navbar.styles";
import { ButtonExample } from "./ButtonA";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <Nav>
      <NavbarContainer>
          <MenuItemBtn>
            {button ? (
              <MenuLinkBtn to="/order-now">
                <ButtonExample onClick={logOut}>Exit</ButtonExample>
              </MenuLinkBtn>
            ) : (
              <MenuLinkBtn to="/login">
                <ButtonExample onClick={logOut}>Exit</ButtonExample>
              </MenuLinkBtn>
            )}
          </MenuItemBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
