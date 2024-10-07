import React from 'react';
import clsx from 'clsx';

import { Console } from '@site/src/data/showcase';

import styles from "./styles.module.css";

const TagMap = {
  [Console.NINTENDO_3DS]: styles.showcaseConsoleTag3DS,
  [Console.NINTENDO_SWITCH]: styles.showcaseConsoleTagSwitch,
  [Console.NINTENDO_WIIU]: styles.showcaseConsoleTagWiiU
};

function ShowcaseCardConsoleTag({ item }: { item: Console }) {
  return (
    <div className={clsx(styles.showcaseConsoleTag, TagMap[item], styles.active)}>
      {item}
    </div>
  );
}

export default React.memo(ShowcaseCardConsoleTag);
