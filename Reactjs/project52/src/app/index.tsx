import "./styles.css";
import React from "react";

export class App extends React.Component<
  Record<string, never>,
  { time: string; timerId: NodeJS.Timeout | null }
> {
  constructor() {
    super({});

    this.state = {
      time: new Date().toLocaleTimeString("ru-RU"),
      timerId: null,
    };
  }

  startTimer() {
    const timerId = setInterval(() =>
      this.setState({
        ...this.state,
        time: new Date().toLocaleTimeString("ru-RU"),
      })
    );

    this.setState({ ...this.state, timerId });
  }

  stopTimer() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId);
    }
  }

  render() {
    return (
      <div className="page">
        <h1 className="clock">{this.state.time}</h1>
      </div>
    );
  }
}