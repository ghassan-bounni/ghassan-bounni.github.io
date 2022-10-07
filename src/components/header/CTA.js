import CV from "../../assets/Ghassan_El_bounni_cv.docx";
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
