import Card from "../Card/Card";
import inflazon from "../../assets/inflazon.png";
import finstagram from "../../assets/finstagram.png";
import finger from "../../assets/finger.png";
import linkedout from "../../assets/linkedout.png";
import readit from "../../assets/readit.png";
import tweetitout from "../../assets/tweetitout.png";
import googledoes from "../../assets/googledoes.png";
import "./Grid.scss";

const projects = [
  {
    id: 1,
    title: "Finstagram",
    image: finstagram,
    link: "https://finstagram-dev-nilson.vercel.app",
  },
  {
    id: 0,
    title: "LinkedOut",
    image: linkedout,
    link: "https://linked-out-dev-nilson.vercel.app",
  },
  {
    id: 2,
    title: "Finger",
    image: finger,
    link: "https://finger-dev-nilson.vercel.app",
  },
  {
    id: 4,
    title: "Readit",
    image: readit,
    link: "https://readit-dev-nilson.vercel.app",
  },
  {
    id: 3,
    title: "Inflazon",
    image: inflazon,
    link: "https://inflazon-dev-nilson.vercel.app",
  },
  {
    id: 5,
    title: "TweetItOut",
    image: tweetitout,
    link: "https://tweet-it-out-dev-nilson.vercel.app",
  },
  {
    id: 6,
    title: "GoogleDoes",
    image: googledoes,
    link: "https://google-does-dev-nilson.vercel.app",
  },
];

function Grid() {
  return (
    <div className="grid">
      <div className="container">
        <h1 className="grid__title">Projects</h1>
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
