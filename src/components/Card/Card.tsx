import "./Card.scss";

type CardProps = {
  title: string;
  image: string;
  link: string;
};

function Card({ title, image, link }: CardProps) {
  return (
    <a href={link}>
      <div className="card">
        <img className="image" src={image} />
      </div>
    </a>
  );
}

export default Card;
