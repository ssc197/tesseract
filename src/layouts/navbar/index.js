import React, { useEffect, useState } from "react";
import HeaderWebComponent from './web/headerWebComponent';
import HeaderMobileComponent from './mobile/headerMobileComponent';


const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() =>{
    
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    return ()=>{
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, [])

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  }
  return (
    <>
      {
        width > 768 ? (<HeaderWebComponent/>) : (<HeaderMobileComponent/>)
      }
    </>
  );
};

export default Navbar;