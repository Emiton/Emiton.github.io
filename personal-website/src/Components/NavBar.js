import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Pdf from '../Documents/EmitonAlvesResume.pdf'

function NavBar() {
  return(
    <>
    <NavLink to='/'>
      <Logo src ="images/logo-black-transparent-background.svg" alt="logo"/>
    </NavLink>
      <nav>
        <NavHeader>
          <LinkWrapper>
            <NavLink to='/about'>About me</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to='/tools-work'>Tools & Work History</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <NavLink to='/contact'>Contact</NavLink>
          </LinkWrapper>
          <LinkWrapper>
            <a href= {Pdf} target='_blank' rel='noreferrer'>Resume</a>
          </LinkWrapper>
        </NavHeader>
      </nav>
    </>
  );
}

const Logo = styled.img`
width: 60px;
margin-bottom: 40px;
`;

const NavHeader = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const LinkWrapper = styled.li`
 font-size: 24px;
 padding-bottom: 6px;
`;

export default NavBar;