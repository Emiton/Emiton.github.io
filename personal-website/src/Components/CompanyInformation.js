import styled from "styled-components";
import { COMPANY_INFO } from "../data";

function CompanyInformation() {
  let index = 0
  const companyInfoList = COMPANY_INFO.map((company) => {
    index += 1
    return (
      <WorkWrapper key={index}>
      <CompanyName>{company.companyName}</CompanyName>
      <JobTitle>{company.jobTitle}</JobTitle>
      <WorkLocation>{company.workLocation}</WorkLocation>
      <WorkDates>{company.workDates}</WorkDates>
      <WorkDescription>{company.workDescription}</WorkDescription>
      </WorkWrapper>
    )
  }
  )

  return (
    <div>
      {companyInfoList}
    </div>
  );
}

const WorkWrapper = styled.div`
  margin-bottom: 16px;
`;

const CompanyName = styled.p`
  font-size: 24px;
  font-weight: 900;
`;

const JobTitle = styled.p``;

const WorkLocation = styled.p``;

const WorkDates = styled.p``;

const WorkDescription = styled.p`
  max-width: 50ch;
`;




export default CompanyInformation;