import "./style.scss";
import question from "../../../../assets/images/developers/circular-question.svg";
import bulb from "../../../../assets/images/developers/circular-bulb.svg";
import user from "../../../../assets/images/developers/circular-user-icon.svg"
import publish from "../../../../assets/images/developers/circular-publish.svg";
import doubleArrow from "../../../../assets/images/developers/double-arrow.svg"
const GetStarted = ({data}) => {
    return (
    <>
        <div className="get-started section-padding">
            <div className="content ">
                <h2 className="title m-all-0">{data.title}</h2>
                <p className=" desc text-white m-all-0">{data.desc}</p>
                <div className="box-container pt-10">
                    <div className="box">
                        <div className="img-container">
                            <img src={question} alt='question' />
                        </div>
                        <div className="content">
                            <div className=" desc text-white">Explore & know <br/>‘<span>How to develop?</span>’</div>
                        </div>
                    </div>
                    <div className="arrow-container">
                        <img src={doubleArrow} alt="arrow"/>
                    </div>
                    <div className="box">
                        <div className="img-container">
                            <img src={bulb} alt='question' />
                        </div>
                        <div className="content">
                            <div className=" desc text-white"><span>Submit Concept</span> <br/>Application</div>
                        </div>
                    </div>
                    <div className="arrow-container">
                        <img src={doubleArrow} alt="arrow"/>
                    </div>
                    <div className="box">
                        <div className="img-container">
                            <img src={user} alt='question' />
                        </div>
                        <div className="content">
                            <div className=" desc text-white"><span>Sign up to access </span><br/>the tools & SDKs</div>
                        </div>
                    </div>
                    <div className="arrow-container">
                        <img src={doubleArrow} alt="arrow"/>
                    </div>
                    <div className="box">
                        <div className="img-container">
                            <img src={publish} alt='publish' />
                        </div>
                        <div className="content">
                            <div className=" desc text-white">Publish and <br/> Monetise</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default GetStarted;
