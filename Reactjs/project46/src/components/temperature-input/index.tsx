import { useState } from "react";
import "./styles.css";
import { TTemperature, TemperatureScale } from "../../types";

type TTemperatureInputProps = {
  scale: TemperatureScale;
};

export const TemperatureInput = ({ scale }: TTemperatureInputProps) => {
  const [value, setValue] = useState<TTemperature>({ scale, temperature: "" });

  return (
    <fieldset className="card">
      <label className="label">
        Введите температуру в {scale}:
        <input
          className="input"
          name="name"
          type="text"
          inputMode="numeric"
          value={value.temperature}
          onChange={(e) => setValue({ scale, temperature: e.target.value })}
        />
      </label>
    </fieldset>
  );
};