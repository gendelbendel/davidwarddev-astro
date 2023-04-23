import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { filterDraft } from "../utils/filterDraft";

export async function get(context) {
  const allPosts = await getCollection("posts");
  const noDraftPosts = allPosts.filter(filterDraft);

  return rss({
    title: "David Ward | Blog",
    description: "Learn more about David Ward and what they're up to",
    site: context.site,
    items: noDraftPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
