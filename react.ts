function ThemeToggle() {
    
    // Начальное состояние компонента и функция для изменения состояния
  const [theme, setTheme] = useState("светлая");

    // Обработчик клика на кнопку
  const toggleTheme = () => {
      // Вызов функции для изменения состояния
        setTheme(theme === "светлая" ? "тёмная" : "светлая");
    }
 
  const themeClass = theme === "светлая" ? "th-light" : "th-dark";
  const buttonImage = theme === "светлая" ? "🌚" : "🌞";

    return (
    <div className={themeClass}>
            <p>Включена {theme} тема</p>
      <button onClick={toggleTheme}>
        {buttonImage}
      </button>
    </div>
  ); 
}

const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem("item");
      return item ? JSON.parse(item) : "";
    } catch {
      return "";
    }
});

const [count, setCount] = useState(0);

function handleClick() {
    setCount(prevCount => prevCount + 1);
}

function handleClick() {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
 }