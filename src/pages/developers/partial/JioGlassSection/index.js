import "./style.scss";
// import { configObject } from "../../helper/objectHelper";
import personImg from "../../../../assets/images/developers/humanCharacter.png";
import Banner from "../../../../components/Banner";
const JioGlassSection = ({ data }) => {
  return (
    <div className="jio-glass-section">
    <Banner data={data} position='bottom' size='contain'/>
    <div className="center-image">
      <div className="img-container">
      <img src={personImg} alt={'Person sitting'} />
      </div>
    </div>
    </div>
  );
};

export default JioGlassSection;
