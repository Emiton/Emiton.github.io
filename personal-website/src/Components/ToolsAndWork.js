import CompanyInformation from "./CompanyInformation";
import SectionTitle from "./SectionTitle";
import ToolTileCarousel from "./ToolTileCarousel";

function ToolsAndWork() {
  return(
    <>
      <SectionTitle title='Tools' />
      <ToolTileCarousel />
      <SectionTitle title='Work History' />
      <CompanyInformation />
    </>
  );
}

export default ToolsAndWork;