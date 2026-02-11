import { ReactElement } from "react";

function Button(): ReactElement {
  const handleClick = (event: any) => {
    console.log("Я ничего не знаю!");
  };

  const handleClickDiv = (event: any) => {
    console.log("Я очень много знаю!");
  };

  return (
    <div onClick={handleClickDiv}>
      <span>
        <button onClick={handleClick}>Очень любопытная кнопка</button>
      </span>
    </div>
  );
}

export const App = () => {
  return <Button />;
};