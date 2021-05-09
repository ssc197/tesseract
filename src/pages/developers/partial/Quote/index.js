import "./style.scss";
// import { configObject } from "../../helper/objectHelper";
import Button from "../../../../components/Button";
const Quote = ({ data }) => {
  return (
    <>
      <div className="container quote">
        <h2>{data.title}</h2>
        <div className="quote-list">
          {data.list.map((item, index) => {
            return (
                <div className="card" key={index}>
                <div className="img-container">
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <div className="content">
                  <h4>{item.title}</h4>
                  <p className="desc text-left " dangerouslySetInnerHTML={{ __html: item.desc }} />
                  {item.desc2?(<p className="desc2">{item.desc2}</p>):(null)}
                  <Button name={item.cta.name} route={item.cta.route} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Quote;
