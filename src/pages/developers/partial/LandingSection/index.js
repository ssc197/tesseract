// import "./style.scss";
// import { configObject } from "../../helper/objectHelper";
import Banner from "../../../../components/Banner";
const LandingSection = ({ data }) => {
   return (
    <>
          <Banner data={data} position='top' size='cover'/>
    </>
  );
};

export default LandingSection;
