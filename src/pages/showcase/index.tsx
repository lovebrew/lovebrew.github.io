import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import clsx from "clsx";

import ShowcaseCards from "./_components/ShowcaseCards";
import { Console, ShowcaseCardFilters, sortedShowcase } from "../../data/showcase";

import styles from "./styles.module.css";
import ShowcaseFilterButton from "./_components/ShowcaseFilterButton";
import { useState } from "react";

const TITLE = translate({ id: "theme.showcase.Title", message: "Projects Showcase" });
const DESCRIPTION = translate({ id: "theme.showcase.Description", message: "List of projects using LÖVE Potion" });
const ADD_PROJECT = translate({ id: "theme.showcase.SubmitProject", message: "Submit Your Project!" });

const BUTTON_TO = "https://github.com/lovebrew/lovebrew.github.io/discussions/10";

function ShowcaseHeader(): JSX.Element {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <Link className={clsx("button button--primary")} to={BUTTON_TO}>
        {ADD_PROJECT}
      </Link>
    </section>
  );
}

function haveCommonItem(filter: Array<Console>, data: Array<Console>): boolean {
  const set = new Set(filter);
  return data.some(item => set.has(item));
}

const gamesResultsText = translate({ id: "theme.showcase.GamesResult", message: "Game" });
const gamesResultsTestPlural = translate({ id: "theme.showcase.GamesResult.Multiple", message: "Games" });

export default function Showcase(): JSX.Element {
  const [filters, setFilters] = useState<Array<Console>>([]);

  const filteredShowcase = sortedShowcase.filter((item) => haveCommonItem(filters, item.consoles));

  function handleClickFilter(filter: Console) {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      filters.push(filter);
      setFilters([...filters]);
    }
  }

  function getFilterResults() {
    return filters.length === 0 ? sortedShowcase : filteredShowcase;
  }

  function getFilterResultsCount() {
    return getFilterResults().length;
  }

  function getFilterResultsText() {
    const length = getFilterResultsCount();
    return length === 1 ? gamesResultsText : gamesResultsTestPlural;
  }

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <div className={styles.showcaseFilterHeaderContainer}>
          <h2 className={styles.showcaseFilterHeader}>Filters:
            <p className={styles.showcaseFilterResults}>
              {getFilterResultsCount()} {getFilterResultsText()}
            </p>
          </h2>
        </div>
        <div className={clsx(styles.showcaseFitlerContainer, "margin-bottom--lg")}>
          {ShowcaseCardFilters.map((filter) => (
            <ShowcaseFilterButton item={filter} key={filter} onClick={() => handleClickFilter(filter)} active={filters.includes(filter)} />
          ))}
        </div>
        <ShowcaseCards items={getFilterResults()} />
      </main>
    </Layout >
  )
}
