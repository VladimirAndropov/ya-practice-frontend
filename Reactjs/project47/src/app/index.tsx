import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { Tooltip } from "../components/tooltip";

export const App = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showTooltip) {
      setX(0);
      setY(0);
      return;
    }

    const { width } = tooltipRef.current!.getBoundingClientRect();
    setX(x + 280);
    setY(y - 50);
    tooltipRef.current!.style.width = `${width}px`;
  }, [showTooltip]);

  return (
    <div className="page">
      <div className="card">
        <button
          className="button"
          onClick={() => setShowTooltip((prevState) => !prevState)}
        >
          {(showTooltip ? "Скрыть" : "Показать") + " всплывающую подсказку"}
        </button>
        {showTooltip && (
          <Tooltip x={x} y={y} tooltipRef={tooltipRef}>
            <p style={{ textWrap: "nowrap" }}>Это всплывающая подсказка</p>
          </Tooltip>
        )}
      </div>
    </div>
  );
};