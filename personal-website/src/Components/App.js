import styled from 'styled-components';
import IntroDetail from './IntroDetail';


function App() {
  return (
    <Wrapper className="App">
      <Logo src ="images/logo-black-transparent-background.svg" alt="logo"/>
      <nav>
        <NavHeader>
          <LinkWrapper>Skills</LinkWrapper>
          <LinkWrapper>Resume</LinkWrapper>
          <LinkWrapper>About me</LinkWrapper>
          <LinkWrapper>Contact</LinkWrapper>
        </NavHeader>
      </nav>
      <Spacer />
      <IntroWrapper>
        <Intro>Hi! My name is Emiton.</Intro>
        <IntroDetail />
      </IntroWrapper>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: 'Satoshi', sans-serif;
  padding: 16px;
  margin: 16px;
`;

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

const Spacer = styled.div`
  flex: 1;
`;

const IntroWrapper = styled.div`
  justify-self: end;
  align-self: flex-end;
  padding-bottom: 20%;
  /* TODO: Adjust padding for smaller screens, make it fluid 20%, then smaller */
  padding-right: 20%;
`;

const Intro = styled.h1`
  font-size: 100px;
  font-weight: 900;
  max-width: 10ch;
  line-height: 1;
`;

export default App;
