const Footer = ({ data }) => {
  return (
    <div className="footer-list text-white">
      {data.map((item, index) => {
        return !item.isSocialMedia ? (
          <ul key={index}>
            <h3>{item.title}</h3>
            {item.list.map((item, index) => {
              return item.isemail ? (
                <li className="pb-10 email-list" key={index}>
                  <a href={`mailto:${item.emailid}`}>{item.name}</a>
                </li>
              ) : (
                <li className="pb-10 " key={index}>
                  <a className={item.class}>{item.name}</a>
                </li>
              );
            })}
          </ul>
        ) : (
          <ul key={index}>
            <h3>{item.title}</h3>
            <div className="social-media-icons pt-10">
            {item.list.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.iconSrc} alt={item.name}/>
                </li>
              );
            })}
            </div>
          </ul>
        );
      })}
    </div>
  );
};
export default Footer;
