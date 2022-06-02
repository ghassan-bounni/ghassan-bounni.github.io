import "./Portfolio.css";
import amazon from "../../assets/clone-2e265.png";
import WinnerForce from "../../assets/winnerforceclone.png";
import calc from "../../assets/calculator.png";
import pomodoro from "../../assets/pomodoro.png";
import blogPost from "../../assets/blog-post.png";

const data = [
  {
    id: 1,
    title: "Personal Blog Post",
    description: "Built with Laravel , Blade and Alpine.js",
    img: blogPost,
    source: "https://github.com/ghassan-bounni/example-app",
    demo: "",
  },
  {
    id: 2,
    title: "Amazon Clone",
    img: amazon,
    description: "Built with React , Redux and Mui",
    source: "https://github.com/ghassan-bounni/Amazon-Clone",
    demo: "https://clone-2e265.web.app",
  },
  {
    id: 3,
    title: "WinnerForce Clone",
    img: WinnerForce,
    description: "Built with React and Redux",
    source: "",
    demo: "https://winnerforceclone.web.app",
  },
  {
    id: 4,
    title: "Calculator",
    img: calc,
    source: "https://codepen.io/ghassanb12/pen/JjywoPr",
    demo: "https://cdpn.io/pen/debug/JjywoPr?authentication_hash=RBrOJbeLOYYM",
  },
  {
    id: 5,
    title: "Pomodoro Clock",
    img: pomodoro,
    source: "https://codepen.io/ghassanb12/pen/dyzwEro",
    demo: "https://cdpn.io/pen/debug/dyzwEro?authentication_hash=dXMqBqbWpNKr",
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
