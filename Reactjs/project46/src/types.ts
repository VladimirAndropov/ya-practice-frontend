export enum TemperatureScale {
  CELCIUS = "°C",
  FAHRENHEIT = "°F",
}

export type TTemperature = {
  scale: TemperatureScale;
  temperature: string;
};