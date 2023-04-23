import { CollectionEntry } from "astro:content";

export function filterDraft(post: CollectionEntry<"posts">) {
  if (import.meta.env.PROD) {
    return !post.data.draft;
  }
  return true;
}
