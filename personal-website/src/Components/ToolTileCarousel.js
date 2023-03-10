import styled from "styled-components";
import { TOOLS } from "../data";

function ToolTileCarousel() {
  const toolList = TOOLS.map((tool) => 
      <Tile>
       <ToolName>{tool.name}</ToolName>
       <ToolIcon>{tool.icon}</ToolIcon>
      </Tile>
  )

  // console.log(toolList)

  return(
    <Wrapper>
      {toolList}
    </Wrapper>
  );
}

const ToolName = styled.p`
  font-size: 36px;
  font-weight: 900;
`;

const ToolIcon = styled.span`
  font-size: 50px;
`;

const Tile = styled.span`
  --shadow-color: 47deg 32% 59%;
  --shadow-elevation:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  border: black solid 6px;
  border-radius: 6px;
  box-shadow: var(--shadow-elevation);
  min-width: 200px;
  height : 125px;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
  place-content: center;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  overflow: auto;
`;

export default ToolTileCarousel;