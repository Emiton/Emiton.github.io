import styled from "styled-components";
import CompanyInformation from './CompanyInformation';
import ToolTileCarousel from './ToolTileCarousel';

function Holder() {
  return (
    <>
      <SectionTitle>Wo History</SectionTitle>
      <CompanyInformation />
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
      <ToolTileCarousel />
      <SectionTitle>Contact</SectionTitle>
      {/* <a href="/pdf/EmitonAlvesResume.pdf" target="_blank"><h2>Resume</h2></a> */}
    </>
  )
}

const SectionTitle = styled.h3`
  font-size: 56px;
  color: hsl(225, 59%, 11%);
`;

export default Holder;