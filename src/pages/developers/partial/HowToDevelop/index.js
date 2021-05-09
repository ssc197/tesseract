import "./style.scss";
import Button from "../../../../components/Button";
const HowToDevelop = ({ data }) => {
  console.log(data.signup);
  return (
    <>
      <div className=" how-to-develop pt-30 pb-30">
        <div className="container">
          <div className="content ">
            <h2 className="title m-all-0 text-left">{data.title}</h2>
            <p className=" desc text-black   text-left">{data.desc}</p>
            <Button name={data.cta.name} route={data.cta.route} />
          </div>
          <div className="cta-container">
            <Button name={data.signup.cta.name} route={data.signup.cta.route}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToDevelop;
