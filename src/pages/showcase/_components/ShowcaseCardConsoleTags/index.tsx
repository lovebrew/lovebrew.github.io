import React from "react";

import { Console } from "@site/src/data/showcase";

import ShowcaseCardConsoleTag from "../ShowcaseCardConsoleTag";

function ShowcaseCardConsoleTags({ consoles }: { consoles: Array<Console> }) {
  return (
    <>
      {consoles.map((item) => (
        <ShowcaseCardConsoleTag key={item} item={item} />
      ))}
    </>
  )
}

export default React.memo(ShowcaseCardConsoleTags);
