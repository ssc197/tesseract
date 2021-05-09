import "./style.scss";
import { Link } from "react-router-dom";
 import Button from "../../../../components/Button";
 import reminderIcon from "../../../../assets/images/developers/noun_reminder_3408014.svg";
const UpcomingEvent = ({data}) => {
    return (
    <>
        <div className="UpcomingEvent">
            <div className="img-container">
                <img src={data.imgSrc} alt="jio glasses"/>
            </div>
            <div className="content">
                <h2 className="title"><span><img src={reminderIcon} alt="reminder"/></span>{data.title}</h2>
                <p className=" desc text-white">{data.desc}</p>
                {data.cta ? (
            <div className="cta-links">
              {data.cta.map((item, index) => {
                return (
                  <div className="cta-lists" key={index}>
                    <Button name={item.name} route={item.route}/>
                  </div>
                );
              })}
            </div>
          ) : null}
            </div>
        </div>
    </>
  );
};

export default UpcomingEvent;
