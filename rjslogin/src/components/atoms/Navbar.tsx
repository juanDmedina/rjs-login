import { useState, useEffect, useContext } from "react";
import {
  Nav,
  NavbarContainer,
  Menu,
  MenuItemBtn,
  MenuLinkBtn,
} from "../../styles/Navbar.styles";
import { ButtonExample } from "./ButtonA";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { logOut } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

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
        <Menu onClick={handleClick}>
          <MenuItemBtn>
            {button ? (
              <MenuLinkBtn to="/order-now">
                <ButtonExample onClick={closeMenu}>Home</ButtonExample>
              </MenuLinkBtn>
            ) : (
              <MenuLinkBtn to="/login">
                <ButtonExample onClick={logOut}>Exit</ButtonExample>
              </MenuLinkBtn>
            )}
          </MenuItemBtn>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
