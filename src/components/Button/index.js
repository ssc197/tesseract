import { Link } from "react-router-dom";

import rightArrow from "../../assets/images/developers/Icon ionic-ios-arrow-down.svg";
import "./style.scss";
const Button = ({ name, route }) => {
  return (
    <>
      <Link className="jio-cta" to={route}>
        <button >
          {name}
          <span>
            <img src={rightArrow} alt={"right arrow"} />
          </span>
        </button>
      </Link>
    </>
  );
};

export default Button;
