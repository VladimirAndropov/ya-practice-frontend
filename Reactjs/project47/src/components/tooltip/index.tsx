import { MutableRefObject, ReactNode } from "react";
import "./styles.css";

type TTooltipProps = {
  x: number;
  y: number;
  children: ReactNode;
  tooltipRef: MutableRefObject<HTMLDivElement | null>;
};

export const Tooltip = ({ x, y, children, tooltipRef }: TTooltipProps) => {
  // Этот код добавдляет небольшую задержку
  // при рендеринге компонента, чтобы сделать
  // мерцание заметным даже на очень производительных
  // компьютерах
  const now = performance.now();
  while (performance.now() - now < 100) {
    // Ничего не делаем
  }

  return (
    <div
      className="tooltip"
      ref={tooltipRef}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      {children}
    </div>
  );
};