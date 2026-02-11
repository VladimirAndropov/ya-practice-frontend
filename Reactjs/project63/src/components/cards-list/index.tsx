import { TCard } from "../../types";
import { Card } from "../card";

type TCardsListProps = {
  cards: Array<TCard>;
};

export const CardsList = ({ cards }: TCardsListProps) => {
  return (
    <section className="cards">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
};