/** Это тип параметров компонента,
    наш компонент будет принимать один пропс - name  */
type Props = { name: string };
/** Это тип состояния нашего компонента,
    так как состояния не будет, то тут у нас пустой объект */
type State = {};
// Чтобы определить класс компонента React, вам необходимо расширить класс React.Component, он также является дженериком, где первым параметром он принимает тип пропсов, а вторым тип состояния компонента
class HelloWorld extends React.Component<Props, State> {
    // обратите внимание, что в классовых компонентах метод рендер отвечает за вёрстку, которую вернёт ваш компонент
    render() {
        // для обращения к параметрам компонента используется объект - this.props
        return <h1>Привет, {this.props.name}</h1>;
    }
} 


------
type Props = {};
type State = { counter: number }
class HelloWorld extends React.Component<Props, State> {
    
    constructor(props) {
      /* 
            вызываем конструктор класса, от которого унаследовались
            в нашем случае - React.Component
        */
      super(props);
      /*
            Сохраняем какое-то состояние нашего компонента, пускай это будет счётчик
            Учтите, что конструктор — это единственное место, где
            вы должны напрямую присваивать this.state. Во всех других
            местах компонента вам нужно использовать this.setState().
        */
      this.state = { counter: 0 };
        // Сохраняем обработчик события клика
      this.handleClick = this.handleClick.bind(this);
    }

    ...
}
-----


// state - текущее состояние компонента
this.setState((state) => {
    return { counter: state.counter + 1 };
  });

-------

render() {
  return <h1>Счетчик: {this.state.counter}</h1>;
}

------

class MyComponent extends React.Component {
  constructor(props) {
      super(props);
      this.myMethod = this.myMethod.bind(this)
}
  myMethod() {
      // логика метода
  }
  render() {
      return <button onClick={this.myMethod}>Нажми на меня</button>;
  }
}

---

    // также не забываем добавить в конструктор привязку контекста  
    constructor(props: {}) {
      super(props);
      this.state = { counter: 0 };
  
      // Это привязывание необходимо, чтобы работал объект this в колбэке
      this.incrementCount = this.incrementCount.bind(this);
  }
  
  incrementCount() {
      this.setState((state) => {
          // Важно: используем state вместо this.state при обновлении.
          return { counter: state.counter + 1 };
      });
  }
  ----
  export const Counter = () => {
    // создаём состояние компонента и функцию, которая его меняет
  const [counter, setCounter] = useState<number>(0);
    // объявляем функцию для увеличения счётчика на единицу
  const incrementCount = () => {
      setCounter(counter + 1);
  }

  // рендерим кнопку со счётчиком
    return (
        <button onClick={incrementCount}>
          Всего кликов: {counter}
      </button>
    )
}
---
class Counter extends React.Component<{}, { counter: number }> {
  constructor(props: {}) {
      super(props);
      this.state = { counter: 0 };

      // Это привязывание необходимо, чтобы работал объект this в колбэке
      this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
      this.setState((state) => {
          // Важно: используем state вместо this.state при обновлении.
          return { counter: state.counter + 1 };
      });
  }

  render() {
      return (
          <button onClick={this.incrementCount}>
              Всего кликов: {this.state.counter}
          </button>
      );
  }
}
---
