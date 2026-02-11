import { ReactElement } from "react";

type ItemProps = {
  item: string;
};

function Item(props: ItemProps): ReactElement {
  return <li>{props.item}</li>;
}

type ListProps = {
  list: string[];
};

function List(props: ListProps): ReactElement {
  return (
    <ul>
      {props.list.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
}

const listTextbooks = [
  "Русский язык - Гусарова И.В.",
  "Литература (в 2 частях) - Лебедев Ю.В.",
  "Черчение - Преображенская Н.Г., Кодукова И.В.",
  "Химия - Габриелян О.С., Остроумов И.Г., Сладков С.А.",
  "Информационная безопасность. Кибербезопасность. - Цветкова М.С., Хлобыстова И.Ю.",
];

export const App = () => {
  return <List list={listTextbooks} />;
};