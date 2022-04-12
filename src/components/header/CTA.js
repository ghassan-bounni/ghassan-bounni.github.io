import CV from "../../assets/Ghassan_CV.PDF";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download="Ghassan_CV.PDF">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
