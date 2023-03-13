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
        I love the feeling of being challenged. Whenever I no longer feel like the underdog, I look for things to challenge me and grow my abilities, because let’s be honest, where&#39;s the fun in doing what I have shown I can already do.
      </Text>
      <Text>
        In my freetime I enjoy playing sports, expanding my culinary knowledge, and exploring both my community and the world at large.
      </Text>
      <Text>
        I also love playing board games like chess, table top strategy games, and card games like Uno. Anything where sound logic, good strategy, and a dash of finesse is appreciated.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div``;



const Text = styled.p`
  text-indent: 32px;
  font-size: 24px;
  max-width: 50ch;
  padding-bottom: 8px;

  @media (max-width: 550px) {
    text-indent: revert;
    font-size: 20px;
  }
`;

export default AboutMe;