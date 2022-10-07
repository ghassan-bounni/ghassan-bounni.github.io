import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/ghassan-el-bounni/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/ghassan-bounni"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Socials;
