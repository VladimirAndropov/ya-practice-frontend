import { ReactElement } from "react";

type WelcomeProps = {};

export default function Welcome(props: WelcomeProps): ReactElement {
  return (
    <>
      <div className="name"></div>
      <div className="welcomText"></div>
    </>
  );
}