import React from "react";
import styled from "styled-components";
import Typed from "typed.js";

function IntroDetail() {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['I am a full-stack software engineer based out of the Greater Boston area.'],
      typeSpeed: 30,
    });

    return () => {
      typed.destroy();
    }
  }, []);

  return(
    <Wrapper>
      <span ref={el} />
    </Wrapper>
  );
}

const Wrapper = styled.h2`
  max-width: 40ch
`;

export default IntroDetail;