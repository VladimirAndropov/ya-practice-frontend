import "./styles.css";
import React from "react";

export class App extends React.Component<
  Record<string, never>,
  { count: number }
> {
  buttonRef: React.RefObject<HTMLButtonElement>;

  constructor(props = {}) {
    super(props);

    this.state = { count: 0 };
    this.buttonRef = React.createRef<HTMLButtonElement>();
  }

  updateColor() {
    if (this.buttonRef.current) {
      this.buttonRef.current.style.color =
        this.state.count % 2 ? "chocolate" : "lightgreen";
    }
  }

  componentDidMount(): void {
    this.buttonRef.current?.focus();
    this.updateColor();
  }

  handleClick = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
    this.updateColor();
  };

  render() {
    return (
      <div className="page">
        <div className="card">
          <button
            className="button"
            ref={this.buttonRef}
            onClick={this.handleClick}
          >
            Счётчик: {this.state.count}
          </button>
        </div>
      </div>
    );
  }
}