import "./style.scss";
import Button from "../Button/";
const Banner = ({ data, position, size='contain' }) => {
  return (
    <>
      <div className="Banner">
        {position === "top" ? (
          <div
            className="Banner BannerTop bgImage"
            style={{ backgroundImage: `url(${data.bannerImgSrc})`,backgroundSize:  size }}
          ></div>
        ) : null}
        <div
          className="content"
          style={
            position === "top"
              ? { position: "absolute" }
              : { position: "relative" }
          }
        >
          <h2 className=" title text-white">{data.title}</h2>
          <p className="desc">{data.desc}</p>
          {data.cta ? (
            <div className="cta-links">
              {data.cta.map((item, index) => {
                return (
                  <div className="cta-lists" key={index}>
                    <Button name={item.name} route={item.route} />
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        {position === "bottom" ? (
          <div
            className="Banner BannerBottom bgImage"
            style={{
              backgroundImage: `url(${data.bannerImgSrc})`,
              backgroundSize: size,
            }}
          ></div>
        ) : null}
      </div>
    </>
  );
};

export default Banner;
