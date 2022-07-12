import CV from "../../assets/cv_ghassan.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download="cv_ghassan.pdf">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
