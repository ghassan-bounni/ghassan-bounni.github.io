import "./Portfolio.css";
import amazon from "../../assets/clone-2e265.png";
import WinnerForce from "../../assets/winnerforceclone.png";
import blogPost from "../../assets/blog-post.png";
import RooFinder from "../../assets/Roofinder.png";
import enfrTranslator from "../../assets/enfr-translator.png";

const data = [
  {
    id: 1,
    title: "RooFinder",
    description: "Built with React and Flask, (MaskRCNN, VGG16)",
    img: RooFinder,
    source: "https://github.com/ghassan-bounni/RooFinder",
    demo: "http://roofinder.herokuapp.com/",
  },
  {
    id: 2,
    title: "En Fr Translator",
    description: "Built with Flask, (Encoder-Decoder Bidirectional LSTM)",
    img: enfrTranslator,
    source: "https://github.com/ghassan-bounni/En_Fr_Translator",
    demo: "https://enfr-translator.herokuapp.com/",
  },
  {
    id: 3,
    title: "Personal Blog Post",
    description: "Built with Laravel , Blade and Alpine.js",
    img: blogPost,
    source: "https://github.com/ghassan-bounni/example-app",
    demo: "",
  },
  {
    id: 4,
    title: "Amazon Clone",
    img: amazon,
    description: "Built with React , Redux and Mui",
    source: "https://github.com/ghassan-bounni/Amazon-Clone",
    demo: "https://clone-2e265.web.app",
  },
  {
    id: 5,
    title: "WinnerForce Clone",
    img: WinnerForce,
    description: "Built with React and Redux",
    source: "",
    demo: "https://winnerforceclone.web.app",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((item) => {
          return (
            <article className="portfolio__item" key={item.id}>
              <div className="portfolio__item__img">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <small
                className="text-light"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBlock: "1em",
                }}
              >
                {item.description}
              </small>
              <div className="portfolio__item__cta">
                <a
                  href={item.source}
                  target="_blank"
                  rel=" noreferrer"
                  className="btn"
                >
                  Source Code
                </a>
                <a
                  href={item.demo}
                  target="_blank"
                  rel=" noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
