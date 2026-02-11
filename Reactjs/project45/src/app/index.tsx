import "./styles.css";

export const App = () => {

  const handleInputChange = () => {
    /* Напишите обработчик */
  };

  const handleSubmit = () => {
    /* Выведите данные из формы на консоль */
  };

  return (
    <div>
      <h1>Заполните форму:</h1>
      <form className="card" onSubmit={handleSubmit}>
        <label className="label">
          Ваше имя:
          <input
            className="input"
            name="name"
            type="text"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};