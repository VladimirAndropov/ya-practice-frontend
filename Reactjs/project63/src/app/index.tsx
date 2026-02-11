import { data as cards } from "../data";
import { CardsList } from "../components/cards-list";

export const App = () => {
  return (
    <div className="app">
      <main className="content">
        <CardsList cards={cards} />
      </main>
    </div>
  );
};