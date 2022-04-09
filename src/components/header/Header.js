import CTA from "./CTA";
import Socials from "./Socials";
import "./Header.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="primary">Hello I'm</h5>
        <h1>Ghassan</h1>
        <h5 className=" text-light  cursive">Full Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={require("../../assets/ghassan.jpg")} alt="me" />
        </div>

        <a href="#contact" className="scroll__down cursive">
          Scroll Down <AiOutlineArrowRight />
        </a>

        <Socials />
      </div>
    </header>
  );
};

export default Header;
