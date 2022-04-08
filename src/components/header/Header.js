import CTA from "./CTA";
import Socials from "./Socials";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ghassan El Bounni</h1>
        <h5 className="text-light">I'm a Full Stack Developer</h5>
        <CTA />

        <div className="me">
          <img src={require("../../assets/ghassan.jpg")} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <Socials />
      </div>
    </header>
  );
};

export default Header;
