import clsx from "clsx";
import { translate } from "@docusaurus/Translate";

import { ShowcaseItem } from "@site/src/data/showcase";
import ShowcaseCard from "../ShowcaseCard";

import styles from "./styles.module.css";

function CardList({ items }: { items: ShowcaseItem[] }) {
  return (
    <div className="container">
      <div className={styles.cardList}>
        {items.map((item) => (
          <ShowcaseCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  )
}

const noGames = translate({ id: "theme.showcase.noGames", message: "No gamez (╥﹏╥)" });

export default function ShowcaseCards({ items }: { items: Array<ShowcaseItem> }) {
  const centered = items.length === 0 ? "text--center" : "";

  return (
    <section className="magin-top--lg margin-bottom--xl">
      <div className={clsx(centered, styles.showcaseContainer)}>
        {(items.length !== 0) ? <CardList items={items} /> : <h2>{noGames}</h2>}
      </div>
    </section>
  )
}
