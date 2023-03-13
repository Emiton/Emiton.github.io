import styled from "styled-components";
import SectionTitle from "./SectionTitle";

function Contact() {
  return (
    <>
      <SectionTitle title='Contact' />
      <EmailWrapper>
        <Email>emitonalves@gmail.com</Email>
        {/* TOOD: Copy to clipboard */}
        {/* <span className="material-symbols-outlined">content_copy</span> */}
        <a href='mailto:emitonalves@gmail.com'>
          <span className="material-symbols-outlined">mail</span>
        </a>
      </EmailWrapper>
      <IconWrapper href='https://www.linkedin.com/in/emiton/'>
        <i className="devicon-linkedin-plain colored" />
      </IconWrapper>
      <IconWrapper href='https://github.com/Emiton'>
      <i className='devicon-github-original-wordmark colored' />
      </IconWrapper>
    </>
  );
}

const EmailWrapper = styled.div`
  display: flex;
  align-content: flex-start;
  margin-bottom: 16px;
  gap: 12px;
  /* ❗️ Adjusting line height to line up email with icons */
  line-height: 0.9;

  @media (max-width: 550px) {
    gap: revert;
    justify-content: space-between;
  }
`;

const Email = styled.p`
  font-size: 24px;
  padding-right: 4px;
`;

const IconWrapper = styled.a`
  font-size: 50px;
  margin-bottom: 16px;
`;

export default Contact;