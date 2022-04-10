import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend ">
          <h3 className="inner-element">Frontend</h3>

          <div className="experience__content ">
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>HTML5 / CSS</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>JQuery</h4>
                <small className="text-ligth">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>Js</h4>
                <small className="text-ligth">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>React</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* ==== BACKEND ==== */}
        <div className="experience__backend ">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-ligth">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-ligth">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-ligth">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>Laravel</h4>
                <small className="text-ligth">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experienced__details__icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-ligth">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
