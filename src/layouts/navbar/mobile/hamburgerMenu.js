import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { configObject } from "../../../helper/objectHelper";

const HamburgerComponent = ({ isMenuOpen, setIsMenuOpen }) => {
  const { subMenu } = configObject;
  const [isMenuOpenFlag, setIsMenuOpenFlag] = useState(isMenuOpen);
  const containerStyle = {
    transform: "translateX(0)",
    zIndex: 998,
  };
  useEffect(() => {
    setIsMenuOpenFlag(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpenFlag) {
      document.querySelector("body").classList.add("overlay-open");
    } else {
      document.querySelector("body").classList.remove("overlay-open");
    }
    setIsMenuOpen(isMenuOpenFlag);
  }, [isMenuOpenFlag]);

  return (
    <>
      <div
        className={`ham-overlay ${isMenuOpenFlag ? "open" : null}`}
        onClick={() => setIsMenuOpenFlag(false)}
      ></div>
      <div
        className="ham-container"
        style={isMenuOpenFlag ? containerStyle : null}
      >
        <ul className="">
          {subMenu.map((item, index) => {
            return <li key={`ham${index}`}>
                    <Link className="jio-cta" to={item.route}>

              {item.name}
              </Link>
              </li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default HamburgerComponent;
