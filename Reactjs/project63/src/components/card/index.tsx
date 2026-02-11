import { TCard } from "../../types";

type TCardProps = {
  card: TCard;
};

export const Card = ({ card }: TCardProps) => {
  return (
    <article className="card">
      <img className="card__image" alt={card.alt} src={card.src} />
      {card.title && <p className="card__title">{card.title}</p>}
      <p className="card__subtitle">{card.subtitle}</p>
    </article>
  );
};