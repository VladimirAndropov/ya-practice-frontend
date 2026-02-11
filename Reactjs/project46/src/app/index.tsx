import { TemperatureInput } from "../components/temperature-input";
import { TemperatureScale } from "../types";
import "./styles.css";

export const App = () => {
  return (
    <div className="page">
      <h1>Конвертер температуры</h1>
      <div className="content">
        <TemperatureInput scale={TemperatureScale.CELCIUS} />
        <TemperatureInput scale={TemperatureScale.FAHRENHEIT} />
      </div>
    </div>
  );
};