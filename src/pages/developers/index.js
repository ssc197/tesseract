import "./style.scss";
import { configObject } from "../../helper/objectHelper";
import  SubMenu from "./partial/SubNavBar";
import LandingSection from "./partial/LandingSection";
import Quote from "./partial/Quote";
import JioGlassSection from "./partial/JioGlassSection";
import UpcomingEvent from "./partial/UpcomingEvent";
import GetStarted from "./partial/GetStarted";
import HowToDevelop from "./partial/HowToDevelop";
const Developer = () => {
  const { subNavbar,banner, quote, jioGlass, upcomingEvent, getStarted, howToDevelop } = configObject.developers;
   return (
    <>
    <SubMenu data={subNavbar}/>
    <LandingSection data={banner}/>
    <Quote data={quote} />
    <JioGlassSection data={jioGlass} />
    <UpcomingEvent data={upcomingEvent} />
    <GetStarted data={getStarted} />
    <HowToDevelop data={howToDevelop}/>
    </>
  );
};

export default Developer;
