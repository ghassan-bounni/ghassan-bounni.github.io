/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={active === "#ecperience" ? "active" : ""}
        onClick={() => setActive("#ecperience")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={active === "#portfolio" ? "active" : ""}
        onClick={() => setActive("#portfolio")}
      >
        <AiOutlineAppstore />
      </a>
      <a
        href="#contact"
        className={active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
