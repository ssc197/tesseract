import "./style.scss";
import { configObject } from "../../helper/objectHelper";
import FooterList from "./FooterList"
const Footer = () => {
  const { footer } = configObject;

  return (
    <footer className="footer pt-100">
        <div className="footer-menu text-white">
          <FooterList data={footer.column1} />
          <FooterList data={footer.column2} />
          <FooterList data={footer.column3} />

        </div>
        <div className="copy-right">
            <h5 className="text-white">Design & Copyright | Jio Tesseract</h5>
        </div>
    </footer>
  );
};
export default Footer;
