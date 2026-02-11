import clsx from "clsx";
import "./styles.css";

const isRed = true;
const isBig = false;

const className = clsx("height", {
  "width-big": isBig,
  "width-small": isBig,
  "background-red": isRed,
  "background-blue": isRed,
});

export const App = () => {
  return <div className={className}></div>;
};