import "./style.scss";

const SubMenu = ({ data }) => {
  return (
    <>
      <div className="sub-navbar">
        <ul>
          {data.map((item, index) => {
            return (
       
                <li key={index}>
                  <div className="box-container">
                    <span className="iconBox">
                      <img src={item.imgSrc} alt={item.name} />
                    </span>
                    <a className={item.class}>{item.name}</a>
                  </div>
                </li>

            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SubMenu;
