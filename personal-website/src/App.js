import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper className="App">
      {/* Nav */}
      {/* Intro */}
      {/* Skills */}
      {/* Resume */}
      {/* About me */}
      <a href="/pdf/EmitonAlvesResume.pdf" target="_blank"><h2>Resume</h2></a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
