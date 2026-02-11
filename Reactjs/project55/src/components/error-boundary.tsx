import React, { ReactNode } from "react";
import { TErrorMessageProps } from "../types";

type TErrorBoundaryProps = {
  errorComponent: React.ComponentType<TErrorMessageProps>;
  children: ReactNode;
};

export class ErrorBoundary extends React.Component<
  TErrorBoundaryProps,
  { error: Error | null }
> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error) {
    /* Напишите код здесь */
  }

  render() {
    /* Напишите код здесь */
    return null;
  }
}