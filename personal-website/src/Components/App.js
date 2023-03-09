import CompanyInformation from './CompanyInformation';
import SkillTile from './SkillTile';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper className="App">
      {/* Nav */}
      {/* Intro */}
      {/* Work History */}
      {/* Technologies */}
      {/* Resume */}
      {/* About me */}
      <nav>
        <NavHeader>
          <li>Skills</li>
          <li>Resume</li>
          <li>About me</li>
          <li>Contact</li>
        </NavHeader>
      </nav>
      <Intro>Hi! My name is Emiton.</Intro>
      <IntroDetail>I am a full-stack software engineer based out of the Greater Boston area.</IntroDetail>
      <SectionTitle>Work History</SectionTitle>
      <WorkHistory>
        <CompanyInformation></CompanyInformation>
        <CompanyInformation></CompanyInformation>
        <CompanyInformation></CompanyInformation>
      </WorkHistory>
      <SectionTitle>Skills</SectionTitle>
      <ul>
        <li>Backend development for JavaScript and Java tech stacks</li>
        <li>Developing cloud native applications on the Amazon Web Services (AWS) platform.</li>
        <li>Leading software projects from design to testing to launch to maintaining software in production environments</li>
        <li>Leading iniatives through SCRUM/Agile processes</li>
        <li>Front-end development</li>
        <li>Creating and maintaining production grade CI/CD infrastructure</li>
      </ul>
      <SectionTitle>Tools</SectionTitle>
      <TileCarousel>
        <SkillTile></SkillTile>
        <SkillTile></SkillTile>
        <SkillTile></SkillTile>
      </TileCarousel>
      <SectionTitle>Contact</SectionTitle>
      {/* <a href="/pdf/EmitonAlvesResume.pdf" target="_blank"><h2>Resume</h2></a> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: hsl(60,100%,95%);
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Satoshi', sans-serif;
  padding: 16px;
`;

const NavHeader = styled.div`
  display: flex;
`;

const Intro = styled.h1`
  font-size: 100px;
  font-weight: 900;
  max-width: 10ch;
  line-height: 1;
`;

const IntroDetail = styled.h2`
  max-width: 40ch
`;

const SectionTitle = styled.h3`
  font-size: 56px;
  color: hsl(225, 59%, 11%);
`;

const WorkHistory = styled.div`
`;



const TileCarousel = styled.div`
  display: flex;
  overflow: auto;
`;

export default App;
