import "./styles.css";

export const App = () => {
  const handleChangeColor = () => {
    /* Здесь нужно поменять цвет фона у заголовка */
  };

  return (
    <div className="page">
      <h1 className="header">Я меняю свой цвет</h1>
      <div className="card">
        <button onClick={handleChangeColor}>Изменить цвет</button>
      </div>
    </div>
  );
};