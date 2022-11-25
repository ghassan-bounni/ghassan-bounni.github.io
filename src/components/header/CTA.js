import CV from "../../assets/Ghassan_El_Bounni_cv.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download="cv_ghassan.docx">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
