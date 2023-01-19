import React from "react";
import { FaBars } from "react-icons/fa";
import { MdMoped } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Deli <MdMoped style={{ fontSize: 40 }} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={450}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="parteners"
                smooth={true}
                duration={450}
                spy={true}
                exact="true"
                offset={-80}
              >
                Parteners
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="couriers"
                smooth={true}
                duration={450}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                Couriers
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="app"
                smooth={true}
                duration={450}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                App
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Log In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
