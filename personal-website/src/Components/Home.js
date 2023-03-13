import styled from "styled-components";
import IntroDetail from "./IntroDetail";

function Home() {
  return (
      <IntroWrapper>
        <Intro>Hi! My name is Emiton.</Intro>
        <IntroDetail />
      </IntroWrapper>
  );
}

const IntroWrapper = styled.div`
  justify-self: end;
  align-self: flex-end;
  padding-top: 12%;
  padding-bottom: 20%;
  /* TODO: Adjust padding for smaller screens, make it fluid 20%, then smaller */
  padding-right: 20%;

  @media(max-width: 550px) {
    padding-right: revert;
  }
`;

const Intro = styled.h1`
  font-size: 100px;
  font-weight: 900;
  max-width: 10ch;
  line-height: 1;

  @media(max-width: 550px) {
    padding-bottom: 16px;
  }
`;

export default Home;