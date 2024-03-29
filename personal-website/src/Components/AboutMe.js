import styled from "styled-components";
import SectionTitle from "./SectionTitle";

function AboutMe() {
  return(
    <Wrapper>
      <SectionTitle title='About me' />
      <Text>
        Hi there! My name is Emiton and I am a first-generation Cape-Verdean American software engineer. I love solving problems, learning, connecting with people, and figuring out what people truly want. These passions have naturally led me to software engineering, where we are rewarded for doing all of the above at scale.
      </Text>
      <Text>
        I love the feeling of being challenged. Whenever I no longer feel like the underdog, I look for things to challenge me and grow my abilities. I truly enjoy the process of learning, struggling, and growing.
      </Text>
      <Text>
        In my freetime I enjoy playing sports, expanding my culinary knowledge, and exploring both my community and the world at large. I also love playing board games like chess, table top strategy games, and card games like Uno. Anything where sound logic, good strategy, and a dash of finesse is appreciated.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 32px;
`;



const Text = styled.p`
  font-size: 24px;
  max-width: 30ch;
  padding-bottom: 16px;

  @media (max-width: 550px) {
    font-size: 20px;
  }
`;

export default AboutMe;