import styled from "styled-components";
import SectionTitle from "./SectionTitle";

function AboutMe() {
  return(
    <Wrapper>
      <SectionTitle title='About me' />
      <Text>
        Nulla iaculis eu tellus varius pretium. Nulla ut efficitur nisi. Pellentesque sed molestie turpis. Phasellus eu congue lacus. Praesent placerat congue velit, nec fringilla metus consequat non. Integer sodales, lectus vel tincidunt tincidunt, nulla justo sagittis turpis, sit amet commodo leo erat a risus. In viverra dui libero, in dignissim tellus feugiat et. Nullam suscipit, quam placerat consequat pellentesque, sapien tellus vehicula neque, in ullamcorper ex elit ac urna. Sed quis accumsan risus. Mauris malesuada nisi ac odio vehicula vehicula. Maecenas viverra, diam non congue molestie, augue augue bibendum nisi, et condimentum dolor tellus et tortor. Curabitur libero sem, eleifend nec porttitor vehicula, maximus id tellus. Fusce tincidunt imperdiet massa, in egestas magna iaculis nec. Donec et est a quam iaculis dictum vitae sed risus. Nullam gravida ullamcorper nunc, in venenatis tortor convallis nec.

        Sed turpis turpis, dignissim eget diam eget, cursus faucibus nisl. Nullam ligula ex, lobortis vel odio sit amet, interdum malesuada dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent et erat et elit imperdiet molestie sed nec urna. Sed efficitur orci eget justo venenatis rhoncus quis sit amet arcu. Integer cursus ultricies consequat. Sed sollicitudin mi quis convallis vulputate. Nam semper diam eget tortor ultrices pellentesque. Mauris bibendum nulla ut nunc fermentum blandit. In nisl orci, dapibus a vehicula vel, facilisis ut tortor. Mauris id turpis metus. Mauris condimentum nisi nunc, id auctor turpis maximus non. Vivamus mattis tempus magna, non tincidunt orci sollicitudin ut. Aliquam erat volutpat. Sed tempus imperdiet velit, eget lobortis nisl porta id. Vestibulum aliquet accumsan justo vel dictum.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div``;



const Text = styled.p`
font-size: 24px;
max-width: 50ch;
`;

export default AboutMe;