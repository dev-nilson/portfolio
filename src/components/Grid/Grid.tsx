import Card from "../Card/Card";
import "./Grid.scss";

const projects = [
  {
    id: 0,
    title: "LinkedOut",
    image: "",
    link: "https://linked-out-dev-nilson.vercel.app",
  },
  {
    id: 1,
    title: "Finstagram",
    image: "",
    link: "https://finstagram-dev-nilson.vercel.app",
  },
  {
    id: 2,
    title: "Finger",
    image: "",
    link: "https://finger-dev-nilson.vercel.app",
  },
  {
    id: 3,
    title: "Readit",
    image: "",
    link: "https://readit-dev-nilson.vercel.app",
  },
];

function Grid() {
  return (
    <div className="grid">
      <div className="container">
        <div className="grid__projects">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grid;
