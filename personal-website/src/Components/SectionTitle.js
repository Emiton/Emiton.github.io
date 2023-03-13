import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function SectionTitle({title}) {
  // eslint-disable-next-line react/prop-types
  return <Header>{title}</Header>
}

const Header = styled.h2`
  font-size: 48px;
  margin-bottom: 16px;
`

export default SectionTitle;