import type { CollectionEntry } from "astro:content";

export function sortByDate(
  descending: boolean = true
): (a: CollectionEntry<"posts">, b: CollectionEntry<"posts">) => number {
  if (descending) {
    return function (a, b) {
      // use + to coerce to number
      return +b.data.pubDate.valueOf() - +a.data.pubDate.valueOf();
    };
  }
  return function (a, b) {
    return +a.data.pubDate.valueOf() - +b.data.pubDate.valueOf();
  };
}
