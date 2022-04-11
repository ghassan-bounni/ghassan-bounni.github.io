import "./Contact.css";
import { BsMessenger } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { waitForElementToBeRemoved } from "@testing-library/react";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_x3t3isj",
      "template_cpjy6kx",
      form.current,
      "3xV6ljNO39CVY9A12"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsInstagram className="contact__option__icon" />
            <h4>Instagram</h4>
            <h5>ghassanbounni</h5>
            <a href="https://www.instagram.com/ghassanbounni/">Check Profile</a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option__icon" />
            <h4>Messenger</h4>
            <h5>Ghassan Bounni</h5>
            <a href="https://m.me/ghassanbounni">Send an Massege</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>Whatsapp</h4>
            <h5>+961 79 149 805</h5>
            <a href="https://api.whatsapp.com/send?phone=+96179149805">
              Send an Massege
            </a>
          </article>
        </div>
        <form action="" ref={form} onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" required />
          <input type="email" name="email" placeholder="email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
