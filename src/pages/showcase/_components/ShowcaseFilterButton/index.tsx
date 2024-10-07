import React from "react";
import clsx from "clsx";

import { Console } from "@site/src/data/showcase";

import styles from "./styles.module.css";

const buttonIdStyles = {
  [Console.NINTENDO_3DS]: styles.showcaseConsoleFilter3DS,
  [Console.NINTENDO_SWITCH]: styles.showcaseConsoleFilterSwitch,
  [Console.NINTENDO_WIIU]: styles.showcaseConsoleFilterWiiU,
};

function ShowcaseCardFilterButton({ item, onClick, active }: { item: Console, onClick: (console: string) => void, active?: boolean }) {
  const isActive = active ? styles.active : "";

  return (
    <button id={buttonIdStyles[item]} className={clsx("button", styles.showcaseConsoleFilterButton, isActive)} onClick={() => onClick(item)}>
      {item}
    </button>
  );
}

export default React.memo(ShowcaseCardFilterButton);
