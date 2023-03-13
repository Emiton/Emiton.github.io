import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import NavBar from './NavBar';
import ToolsAndWork from './ToolsAndWork';


function App() {
  return (
    <Wrapper className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/tools-work' element={<ToolsAndWork />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: 'Satoshi', sans-serif;
  padding: 16px;
  margin: 16px;
`;

export default App;
